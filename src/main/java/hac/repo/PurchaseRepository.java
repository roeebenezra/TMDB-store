package hac.repo;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * This interface is the JPA repository (SQL database).
 * It is automatically created by Spring.
 */
public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
}
