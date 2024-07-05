package IPL;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class points_table_controller
{
	
	private points_table_repository ptr;
	
	public points_table_controller(points_table_repository Points_table_repository)
	{
		this.ptr = Points_table_repository;
	}
	
	@GetMapping("/pointstable/{year}")
	public List<points_table> getAllteam(@PathVariable int year)
	{
		return ptr.findBySeasonOrderByIplrank(year);
	}
}