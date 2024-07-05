package IPL;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface points_table_repository extends CrudRepository<points_table, Integer>
{
	 List<points_table> findBySeasonOrderByIplrank(int year);
}