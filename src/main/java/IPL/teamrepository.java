package IPL;

import org.springframework.data.repository.CrudRepository;

public interface teamrepository extends CrudRepository<team, String>
{
	 team findByteamname(String teamname);
}