package IPL;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class srecords
{
	@Id
	public int season;
	public String winner;
	public String fair_play_award;
	public String Orange_Cap_P;
	public int Orange_Cap;
	public String Purple_Cap_P;
	public int Purple_Cap;
	public String Most_Sixes_P;
	public int Most_Sixes;
	public String H_SR_P;
	public int H_SR;
	public String PoT;
	public String Emerging_P;
	public String Best_Catch;
	
	
	public srecords(int season, String winner, String fair_play_award, String orange_Cap_P, int orange_Cap,
			String purple_Cap_P, int purple_Cap, String most_Sixes_P, int most_Sixes, String h_SR_P, int h_SR,
			String poT, String emerging_P, String best_Catch) {
		super();
		this.season = season;
		this.winner = winner;
		this.fair_play_award = fair_play_award;
		Orange_Cap_P = orange_Cap_P;
		Orange_Cap = orange_Cap;
		Purple_Cap_P = purple_Cap_P;
		Purple_Cap = purple_Cap;
		Most_Sixes_P = most_Sixes_P;
		Most_Sixes = most_Sixes;
		H_SR_P = h_SR_P;
		H_SR = h_SR;
		PoT = poT;
		Emerging_P = emerging_P;
		Best_Catch = best_Catch;
	}
	public srecords() {
		super();
	}
	
	
	public int getSeason() {
		return season;
	}
	public void setSeason(int season) {
		this.season = season;
	}
	public String getWinner() {
		return winner;
	}
	public void setWinner(String winner) {
		this.winner = winner;
	}
	public String getFair_play_award() {
		return fair_play_award;
	}
	public void setFair_play_award(String fair_play_award) {
		this.fair_play_award = fair_play_award;
	}
	public String getOrange_Cap_P() {
		return Orange_Cap_P;
	}
	public void setOrange_Cap_P(String orange_Cap_P) {
		Orange_Cap_P = orange_Cap_P;
	}
	public int getOrange_Cap() {
		return Orange_Cap;
	}
	public void setOrange_Cap(int orange_Cap) {
		Orange_Cap = orange_Cap;
	}
	public String getPurple_Cap_P() {
		return Purple_Cap_P;
	}
	public void setPurple_Cap_P(String purple_Cap_P) {
		Purple_Cap_P = purple_Cap_P;
	}
	public int getPurple_Cap() {
		return Purple_Cap;
	}
	public void setPurple_Cap(int purple_Cap) {
		Purple_Cap = purple_Cap;
	}
	public String getMost_Sixes_P() {
		return Most_Sixes_P;
	}
	public void setMost_Sixes_P(String most_Sixes_P) {
		Most_Sixes_P = most_Sixes_P;
	}
	public int getMost_Sixes() {
		return Most_Sixes;
	}
	public void setMost_Sixes(int most_Sixes) {
		Most_Sixes = most_Sixes;
	}
	public String getH_SR_P() {
		return H_SR_P;
	}
	public void setH_SR_P(String h_SR_P) {
		H_SR_P = h_SR_P;
	}
	public int getH_SR() {
		return H_SR;
	}
	public void setH_SR(int h_SR) {
		H_SR = h_SR;
	}
	public String getPoT() {
		return PoT;
	}
	public void setPoT(String poT) {
		PoT = poT;
	}
	public String getEmerging_P() {
		return Emerging_P;
	}
	public void setEmerging_P(String emerging_P) {
		Emerging_P = emerging_P;
	}
	public String getBest_Catch() {
		return Best_Catch;
	}
	public void setBest_Catch(String best_Catch) {
		Best_Catch = best_Catch;
	}
}