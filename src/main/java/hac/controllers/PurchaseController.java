package hac.controllers;

import hac.repo.Purchase;
import hac.repo.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * This class is the controller for the purchases.
 * Responsible for handling the HTTP requests and responses.
 * It is also responsible for interacting with the database.
 */
@RestController
@RequestMapping("/api")
public class PurchaseController {

    /**
     * This is the JPA repository (SQL database).
     * It is automatically created by Spring.
     */
    @Autowired
    private PurchaseRepository repository;  // this is the JPA repository (SQL database)

    /**
     * This method is responsible for handling the HTTP GET request.
     * It returns all the purchases in the database.
     * @return a list of all the purchases in the database
     */
    @GetMapping("/purchases")
    public List<Purchase> showPurchases() {
        return repository.findAll(); // this is a JPA method to get all the purchases
    }

    /**
     * This method is responsible for handling the HTTP POST request.
     * It adds a purchase to the database.
     * @param purchase the purchase to be added to the database
     * @return the purchase that was added to the database
     */
    @PostMapping("/purchases/add")
    public Purchase addPurchase(@RequestBody Purchase purchase) {
        return repository.save(purchase); // this is a JPA method to save a purchase to the database
    }
}
