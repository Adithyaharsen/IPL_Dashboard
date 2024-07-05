package IPL;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface srecordsrepository extends CrudRepository<srecords, Integer>
{
	List<srecords> findAll();
}