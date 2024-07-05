package IPL;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class points_table
{ 
	int season;
	int iplrank; 
	String name;
	String short_name;
	int matchesplayed; 
	int matcheswon;
	int matcheslost; 
	int noresult;
	int points;
	double nrr;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	
	public points_table() {
		super();
	}

	public points_table(int season, int iplrank, String name, String short_name, int matchesplayed, int matcheswon,
			int matcheslost, int noresult, int points, double nrr) {
		super();
		this.season = season;
		this.iplrank = iplrank;
		this.name = name;
		this.short_name = short_name;
		this.matchesplayed = matchesplayed;
		this.matcheswon = matcheswon;
		this.matcheslost = matcheslost;
		this.noresult = noresult;
		this.points = points;
		this.nrr = nrr;
	}
	
	public int getSeason() {
		return season;
	}
	public void setSeason(int season) {
		this.season = season;
	}
	public int getIplrank() {
		return iplrank;
	}
	public void setIplrank(int rank) {
		this.iplrank = rank;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getShort_name() {
		return short_name;
	}
	public void setShort_name(String short_name) {
		this.short_name = short_name;
	}
	public int getMatchesplayed() {
		return matchesplayed;
	}
	public void setMatchesplayed(int matchesplayed) {
		this.matchesplayed = matchesplayed;
	}
	public int getMatcheswon() {
		return matcheswon;
	}
	public void setMatcheswon(int matcheswon) {
		this.matcheswon = matcheswon;
	}
	public int getMatcheslost() {
		return matcheslost;
	}
	public void setMatcheslost(int matcheslost) {
		this.matcheslost = matcheslost;
	}
	public int getNoresult() {
		return noresult;
	}
	public void setNoresult(int noresult) {
		this.noresult = noresult;
	}
	public int getPoints() {
		return points;
	}
	public void setPoints(int points) {
		this.points = points;
	}
	public double getNrr() {
		return nrr;
	}
	public void setNrr(double nrr) {
		this.nrr = nrr;
	}
	
}