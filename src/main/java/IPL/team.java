package IPL;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

@Entity
public class team
{
	@Id
	private String teamname;
	private int totalmatches;
	private int totalwins;
	
	@Transient
	List<match_data> matches;
	
	team()
	{
		teamname=null;
		totalmatches=0;
		totalwins=0;
	}

	public String getTeamname() {
		return teamname;
	}
	public void setTeamname(String teamname) {
		this.teamname = teamname;
	}
	public int getTotalmatches() {
		return totalmatches;
	}
	public void setTotalmatches(int totalmatches) {
		this.totalmatches = totalmatches;
	}
	public int getTotalwins() {
		return totalwins;
	}
	public void setTotalwins(int totalwins) {
		this.totalwins = totalwins;
	}

	public List<match_data> getMatches() {
		return matches;
	}

	public void setMatches(List<match_data> matches) {
		this.matches = matches;
	}
	
	
}
