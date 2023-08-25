package hac.repo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.PositiveOrZero;

import java.io.Serializable;

/**
 * a purchase is a record of a user buying a product. You should not need to edit this file
 * but if you feel like you need to, please get in touch with the teacher.
 */
@Entity
public class Purchase implements Serializable {
    /**
     * The id of the purchase
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The first name of the user
     */
    @NotEmpty(message = "First name is mandatory")
    private String firstName;

    /**
     * The last name of the user
     */
    @NotEmpty(message = "Last name is mandatory")
    private String lastName;

    /**
     * The email of the user
     */
    @NotEmpty(message = "Email is mandatory")
    @Email(message = "Email should be valid")
    private String email;

    /**
     * The payment price of the user
     */
    @PositiveOrZero(message = "Payment must be positive or zero")
    private Double payment = 0.0;

    /**
     * Constructor with parameters
     * @param email - user email
     * @param total - total payment
     * @param firstName - user first name
     * @param lastName - user last name
     */
    public Purchase(String email, Double total, String firstName, String lastName) {
        this.email = email;
        this.payment = total;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * Empty Constructor
     */
    public Purchase() {

    }


    // getters and setters

    /**
     * Getter for id
     * @return id
     */
    public Long getId() {
        return id;
    }

    /**
     * Getter for first name
     * @return first name
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Getter for last name
     * @return
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Getter for payment
     * @return payment
     */
    public Double getPayment() {
        return payment;
    }

    /**
     * Getter for email
     * @return email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Setter for id
     * @param id - id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Setter for first name
     * @param firstName - first name
     */
    public void setFirstName(String firstName) {
        this.firstName=firstName;
    }

    /**
     * Setter for last name
     * @param lastName - last name
     */
    public void setLastName(String lastName) {
        this.lastName=lastName;
    }

    /**
     * Setter for payment
     * @param payment - payment
     */
    public void setPayment(Double payment) {
        this.payment=payment;
    }

    /**
     * Setter for email
     * @param email - email
     */
    public void setEmail(String email) {
        this.email=email;
    }

}

