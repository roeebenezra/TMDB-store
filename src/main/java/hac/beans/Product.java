package hac.beans;

import org.springframework.stereotype.Component;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

/**
 * Product class

 * This class is used to store the information of a product
 */
@Component
public class Product {
    /**
     * The id of the product
     */
    @NotNull
    @NotEmpty
    private String id;

    /**
     * The count of the product
     */
    private int count = 1;

    /**
     * The title of the product
     */
    @NotNull
    private String title;

    /**
     * The image of the product
     */
    @NotNull
    private String img;

    /**
     * The release date of the product
     */
    @NotNull
    private String releaseDate;

    /**
     * Empty Constructor
     */
    public Product() {
    }

    /**
     * Constructor with parameters
     * @param id - product id
     * @param title - product title
     * @param img - product image
     * @param releaseDate - product release date
     */
    public Product(String id, String title, String img, String releaseDate) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.releaseDate = releaseDate;
    }

    /**
     * Set the count of the product by 1
     *
     * @return Product - the product with the count increased by 1
     */
    public Product setCount(){
        this.count++;
        return this;
    }

    /**
     * Get the count of the product
     * @return int - the count of the product
     */
    public int getCount(){
        return this.count;
    }

    /**
     * Get the id of the product
     * @return String - the id of the product
     */
    public String getId() {
        return id;
    }

    /**
     * Set the id of the product
     * @param id - the id of the product
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * Get the title of the product
     * @return String - the title of the product
     */
    public String getTitle() {
        return title;
    }

    /**
     * Get the image of the product
     * @return String - the image of the product
     */
    public String getImg() {
        return img;
    }

    /**
     * Get the release date of the product
     * @return String - the release date of the product
     */
    public String getReleaseDate() {
        return releaseDate;
    }

    /**
     * Set the title of the product
     * @param title - the title of the product
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Set the image of the product
     * @param img - the image of the product
     */
    public void setImg(String img) {
        this.img = img;
    }

    /**
     * Set the release date of the product
     * @param releaseDate - the release date of the product
     */
    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    /**
     * Override the toString method
     * @return String - the string representation of the product
     */
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", count=" + count +
                ", title='" + title + '\'' +
                ", img='" + img + '\'' +
                ", releaseDate='" + releaseDate + '\'' +
                '}';
    }
}
