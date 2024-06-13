package IPL;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class match_data
{ 
	@Id
	int id; 
	int season;
	String city;
	Date date;
	String team1;
	String team2;
	String toss_winner;
	String toss_decision; 
	String result;
	String dl_applied; 
	String winner; 
	int win_by_runs; 
	int win_by_wickets; 
	String player_of_match; 
	String venue;
	String umpire1;
	String umpire2; 
	String umpire3;
	
	public match_data() 
	{
		this.id = 0;
		this.season = 0;
		this.city = null;
		this.date = null;
		this.team1 = null;
		this.team2 = null;
		this.toss_winner = null;
		this.toss_decision = null;
		this.result = null;
		this.dl_applied = null;
		this.winner = null;
		this.win_by_runs = 0;
		this.win_by_wickets = 0;
		this.player_of_match = null;
		this.venue = null;
		this.umpire1 = null;
		this.umpire2 = null;
		this.umpire3 = null;
	}

	public match_data(int id, int season, String city, Date date, String team1, String team2, String toss_winner,
			String toss_decision,String result, String dl_applied, String winner, int win_by_runs, int win_by_wickets,
			String player_of_match, String venue, String umpire1, String umpire2, String umpire3)
	{
		super();
		this.id = id;
		this.season = season;
		this.city = city;
		this.date = date;
		this.team1 = team1;
		this.team2 = team2;
		this.toss_winner = toss_winner;
		this.toss_decision = toss_decision;
		this.result=result;
		this.dl_applied = dl_applied;
		this.winner = winner;
		this.win_by_runs = win_by_runs;
		this.win_by_wickets = win_by_wickets;
		this.player_of_match = player_of_match;
		this.venue = venue;
		this.umpire1 = umpire1;
		this.umpire2 = umpire2;
		this.umpire3 = umpire3;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getSeason() {
		return season;
	}

	public void setSeason(int season) {
		this.season = season;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getTeam1() {
		return team1;
	}

	public void setTeam1(String team1) {
		this.team1 = team1;
	}

	public String getTeam2() {
		return team2;
	}

	public void setTeam2(String team2) {
		this.team2 = team2;
	}

	public String getToss_winner() {
		return toss_winner;
	}

	public void setToss_winner(String toss_winner) {
		this.toss_winner = toss_winner;
	}

	public String getToss_decision() {
		return toss_decision;
	}

	public void setToss_decision(String toss_decision) {
		this.toss_decision = toss_decision;
	}

	public String getDl_applied() {
		return dl_applied;
	}

	public void setDl_applied(String dl_applied) {
		this.dl_applied = dl_applied;
	}

	public String getWinner() {
		return winner;
	}

	public void setWinner(String winner) {
		this.winner = winner;
	}

	public int getWin_by_runs() {
		return win_by_runs;
	}

	public void setWin_by_runs(int win_by_runs) {
		this.win_by_runs = win_by_runs;
	}

	public int getWin_by_wickets() {
		return win_by_wickets;
	}

	public void setWin_by_wickets(int win_by_wickets) {
		this.win_by_wickets = win_by_wickets;
	}

	public String getPlayer_of_match() {
		return player_of_match;
	}

	public void setPlayer_of_match(String player_of_match) {
		this.player_of_match = player_of_match;
	}

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}

	public String getUmpire1() {
		return umpire1;
	}

	public void setUmpire1(String umpire1) {
		this.umpire1 = umpire1;
	}

	public String getUmpire2() {
		return umpire2;
	}

	public void setUmpire2(String umpire2) {
		this.umpire2 = umpire2;
	}

	public String getUmpire3() {
		return umpire3;
	}

	public void setUmpire3(String umpire3) {
		this.umpire3 = umpire3;
	} 

	
}
