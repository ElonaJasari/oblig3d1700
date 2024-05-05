package com.example.oblig3d1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    private KundeRepository rep;
    @PostMapping("/lagre")
    public void lagreBilett(Billett innBillett) {
        rep.lagreBillett(innBillett);
    }
    @GetMapping("/hentAlleBilletter")
    public List<Billett> hentAlle() {
        return rep.hentAlleBilletter();
    }
    @GetMapping("/slettAlleBilletter")
    public void slettAlle() {
        rep.slettAlleBilletter();
    }
}
