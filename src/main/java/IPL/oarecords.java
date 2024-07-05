package IPL;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class oarecords
{
	@Id
	private int Slno;
	private String Runs_P;
	private int Runs;
	private String Wickets_P;
	private int Wickets;
	private String Fifties_P;
	private int Fifties;
	private String Hundreds_P;
	private int Hundreds;
	private String Sixes_P;
	private int Sixes;
	private String Fours_P;
	private int Fours;
	private String Highest_Score_P;
	private int Highest_Score;
	private String Ducks_P;
	private int Ducks;
	private String Highest_Average_P;
	private double Highest_Average;
	private String Highest_Strikerate_P;
	private double Highest_Strikerate;
	private String Sixes_inan_innings_P;
	private int Sixes_inan_innings;
	private String Dismiss_P;
	private int Dismiss;
	private String Catches_P;
	private int Catches;
	private String Catches_Innings_P;
	private int Catches_Innings;
	private String Highest_Partnership_P1;
	private String Highest_Partnership_P2;
	private int Highest_Partnership;
	
	
	public oarecords(int catches,String catches_P,int catches_inan_Innings,String catches_inan_Innings_P,int dismissals,
			String dismissals_P,int ducks,String ducks_P,int fifties,String fifties_P,int fours,String fours_P,
			double highest_Average,String highest_Average_P,int highest_Partnership,String highest_Partnership_P1,
			String highest_Partnership_P2,int highest_Score,String highest_Score_P,double highest_Strikerate,
			String highest_Strikerate_P,int hundreds,String hundreds_P,int runs,String runs_P,int sixes,String sixes_P,
			int sixes_inan_innings,String sixes_inan_innings_P,int wickets,String wickets_P,int slno) {
		super();
		this.Slno = slno;
		Runs_P = runs_P;
		Runs = runs;
		Wickets_P = wickets_P;
		Wickets = wickets;
		Fifties_P = fifties_P;
		Fifties = fifties;
		Hundreds_P = hundreds_P;
		Hundreds = hundreds;
		Sixes_P = sixes_P;
		Sixes = sixes;
		Fours_P = fours_P;
		Fours = fours;
		Highest_Score_P = highest_Score_P;
		Highest_Score = highest_Score;
		Ducks_P = ducks_P;
		Ducks = ducks;
		Highest_Average_P = highest_Average_P;
		Highest_Average = highest_Average;
		Highest_Strikerate_P = highest_Strikerate_P;
		Highest_Strikerate = highest_Strikerate;
		Sixes_inan_innings_P = sixes_inan_innings_P;
		Sixes_inan_innings = sixes_inan_innings;
		Dismiss_P = dismissals_P;
		Dismiss = dismissals;
		Catches_P = catches_P;
		Catches = catches;
		Catches_Innings_P = catches_inan_Innings_P;
		Catches_Innings = catches_inan_Innings;
		Highest_Partnership_P1 = highest_Partnership_P1;
		Highest_Partnership_P2 = highest_Partnership_P2;
		Highest_Partnership = highest_Partnership;
	}
	public oarecords() {
		super();
	}
	public int getSlno() {
		return Slno;
	}
	public void setSlno(int slno) {
		Slno = slno;
	}
	public String getRuns_P() {
		return Runs_P;
	}
	public void setRuns_P(String runs_P) {
		Runs_P = runs_P;
	}
	public int getRuns() {
		return Runs;
	}
	public void setRuns(int runs) {
		Runs = runs;
	}
	public String getWickets_P() {
		return Wickets_P;
	}
	public void setWickets_P(String wickets_P) {
		Wickets_P = wickets_P;
	}
	public int getWickets() {
		return Wickets;
	}
	public void setWickets(int wickets) {
		Wickets = wickets;
	}
	public String getFifties_P() {
		return Fifties_P;
	}
	public void setFifties_P(String fifties_P) {
		Fifties_P = fifties_P;
	}
	public int getFifties() {
		return Fifties;
	}
	public void setFifties(int fifties) {
		Fifties = fifties;
	}
	public String getHundreds_P() {
		return Hundreds_P;
	}
	public void setHundreds_P(String hundreds_P) {
		Hundreds_P = hundreds_P;
	}
	public int getHundreds() {
		return Hundreds;
	}
	public void setHundreds(int hundreds) {
		Hundreds = hundreds;
	}
	public String getSixes_P() {
		return Sixes_P;
	}
	public void setSixes_P(String sixes_P) {
		Sixes_P = sixes_P;
	}
	public int getSixes() {
		return Sixes;
	}
	public void setSixes(int sixes) {
		Sixes = sixes;
	}
	public String getFours_P() {
		return Fours_P;
	}
	public void setFours_P(String fours_P) {
		Fours_P = fours_P;
	}
	public int getFours() {
		return Fours;
	}
	public void setFours(int fours) {
		Fours = fours;
	}
	public String getHighest_Score_P() {
		return Highest_Score_P;
	}
	public void setHighest_Score_P(String highest_Score_P) {
		Highest_Score_P = highest_Score_P;
	}
	public int getHighest_Score() {
		return Highest_Score;
	}
	public void setHighest_Score(int highest_Score) {
		Highest_Score = highest_Score;
	}
	public String getDucks_P() {
		return Ducks_P;
	}
	public void setDucks_P(String ducks_P) {
		Ducks_P = ducks_P;
	}
	public int getDucks() {
		return Ducks;
	}
	public void setDucks(int ducks) {
		Ducks = ducks;
	}
	public String getHighest_Average_P() {
		return Highest_Average_P;
	}
	public void setHighest_Average_P(String highest_Average_P) {
		Highest_Average_P = highest_Average_P;
	}
	public double getHighest_Average() {
		return Highest_Average;
	}
	public void setHighest_Average(double highest_Average) {
		Highest_Average = highest_Average;
	}
	public String getHighest_Strikerate_P() {
		return Highest_Strikerate_P;
	}
	public void setHighest_Strikerate_P(String highest_Strikerate_P) {
		Highest_Strikerate_P = highest_Strikerate_P;
	}
	public double getHighest_Strikerate() {
		return Highest_Strikerate;
	}
	public void setHighest_Strikerate(double highest_Strikerate) {
		Highest_Strikerate = highest_Strikerate;
	}
	public String getSixes_inan_innings_P() {
		return Sixes_inan_innings_P;
	}
	public void setSixes_inan_innings_P(String sixes_inan_innings_P) {
		Sixes_inan_innings_P = sixes_inan_innings_P;
	}
	public int getSixes_inan_innings() {
		return Sixes_inan_innings;
	}
	public void setSixes_inan_innings(int sixes_inan_innings) {
		Sixes_inan_innings = sixes_inan_innings;
	}
	public String getDismiss_P() {
		return Dismiss_P;
	}
	public void setDismiss_P(String dismiss_P) {
		Dismiss_P = dismiss_P;
	}
	public int getDismiss() {
		return Dismiss;
	}
	public void setDismiss(int dismiss) {
		Dismiss = dismiss;
	}
	public String getCatches_P() {
		return Catches_P;
	}
	public void setCatches_P(String catches_P) {
		Catches_P = catches_P;
	}
	public int getCatches() {
		return Catches;
	}
	public void setCatches(int catches) {
		Catches = catches;
	}
	public String getCatches_Innings_P() {
		return Catches_Innings_P;
	}
	public void setCatches_Innings_P(String catches_Innings_P) {
		Catches_Innings_P = catches_Innings_P;
	}
	public int getCatches_Innings() {
		return Catches_Innings;
	}
	public void setCatches_Innings(int catches_Innings) {
		Catches_Innings = catches_Innings;
	}
	public String getHighest_Partnership_P1() {
		return Highest_Partnership_P1;
	}
	public void setHighest_Partnership_P1(String highest_Partnership_P1) {
		Highest_Partnership_P1 = highest_Partnership_P1;
	}
	public String getHighest_Partnership_P2() {
		return Highest_Partnership_P2;
	}
	public void setHighest_Partnership_P2(String highest_Partnership_P2) {
		Highest_Partnership_P2 = highest_Partnership_P2;
	}
	public int getHighest_Partnership() {
		return Highest_Partnership;
	}
	public void setHighest_Partnership(int highest_Partnership) {
		Highest_Partnership = highest_Partnership;
	}
}