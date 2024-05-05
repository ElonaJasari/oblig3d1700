function regKunde() {
    let film = $("#film").val();
    let antall = $("#antall").val();
    let fornavn = $("#fornavn").val();
    let etternavn = $("#etternavn").val();
    let telefonnr = $("#telefonnr").val();
    let epost = $("#epost").val()

    let erValid = true;

    if(!film) {
        $("#filmError").text("Vennligst velg en film");
        erValid = false;
    } else {
        $("#filmError").text("");
    }
    if (antall <= 0){
        $("#antallError").text("Du må velge et gyldig antall");
        erValid = false;
    } else {
        $("#antallError").text("");
    }
    if (fornavn === ""){
        $("#fornavnError").text("Skriv inn et gyldig navn");
        erValid = false
    } else {
        $("#fornavnError").text("");
    }
    if (etternavn === ""){
        $("#etternavnError").text("Skriv inn et gyldig navn");
        erValid = false;
    }    else {
        $("#etternavnError").text("");
    }
    if (!/^[0-9]+$/.test(telefonnr)) {
        $("#telefonnrError").text("Skriv inn et gyldig telefonnr");
        erValid = false;
    } else {
        $("#telefonnrError").text("");
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(epost)) {
        $("#epostError").text("Skriv inn en gyldig epost");
        erValid = false;
    } else {
        $("#epostError").text("");
    }
    if (erValid){
        const billett = {
            film : film,
            antall : antall,
            fornavn : fornavn,
            etternavn : etternavn,
            telefonnr : telefonnr,
            epost : epost
        };
        $.post("/lagre", billett, function(){
            hentAlleBilletter();
        });
        nyBillettKlar();
    }
}
function hentAlleBilletter(){
    $.get("/hentAlleBilletter", function (data){
        formaterData(data);
    });
}
function slettAlleBilletter(){
    $.get("/slettAlleBilletter", function(data){
        formaterData(data);
    });
}
function formaterData(billetter) {
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>" +
        "Etternavn</th><th>Telefonnr</th><th>" +
        "Epost</th>" +
        "</tr>";
    for (let billett of billetter) {
        ut += "<tr>";
        ut += "<td>" + billett.film + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn +
            "</td><td>" + billett.etternavn + "</td><td>" + billett.telefonnr + "</td><td>" + billett.epost + "</td>";
    }
    ut += "</table>";
    $("#billettene").html(ut);
}
function nyBillettKlar() {
    $("#film").val("Velg film her");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
}
