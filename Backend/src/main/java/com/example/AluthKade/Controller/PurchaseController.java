package com.example.AluthKade.Controller;

import com.example.AluthKade.Entity.Purchase;
import com.example.AluthKade.Service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("api/v1/purchase")
public class PurchaseController {
    @Autowired
    private PurchaseService purchaseService;

    @PostMapping("/add")
    public Purchase addPurchase(@RequestBody Purchase purchase, HttpServletRequest httpServletRequest){
        return purchaseService.addPurchase(purchase);
    }
}
