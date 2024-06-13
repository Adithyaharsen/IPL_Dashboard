package IPL;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class teamcontroller
{
	
	private teamrepository tr;
	private matchrepository mr;
	
	public teamcontroller(teamrepository Teamrepository,matchrepository Matchrepository)
	{
		this.tr = Teamrepository;
		this.mr = Matchrepository;
	}
	
	@GetMapping("/teams")
	public Iterable<team> getAllteam()
	{
		return tr.findAll();
	}
	
	@GetMapping("/teams/{teamname}")
	public team getteam(@PathVariable("teamname") String teamname)
	{
		team t = tr.findByteamname(teamname);
		
		t.setMatches(mr.findlatest4matchesbyteam(teamname, 4));
		return t;
	}
	
	@GetMapping("/teams/{teamname}/matches")
	public List<match_data> getMatchesforTeam(@PathVariable("teamname") String teamName, @RequestParam int year)
	{
		LocalDate startDate = LocalDate.of(year, 1, 1);
		LocalDate endDate = LocalDate.of(year, 12, 31);
		return mr.findByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(teamName,startDate,endDate,teamName,startDate,endDate);
	}
}