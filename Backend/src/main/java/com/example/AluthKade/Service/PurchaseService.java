package com.example.AluthKade.Service;

import com.example.AluthKade.Entity.Purchase;
import com.example.AluthKade.Repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PurchaseService {
    @Autowired
    PurchaseRepository purchaseRepository;

    public Purchase addPurchase(Purchase purchase) {
        return purchaseRepository.save(purchase);
    }
}
