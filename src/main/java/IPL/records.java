package IPL;

public class records
{ 
	int slno;
	String player;
	String value;
	String player2;
	
	
	public records() {
		super();
	}
	records(int slno,String player,int value)
	{
		this.slno=slno;
		this.player=player;
		this.value=Integer.toString(value);
	}
	records(int slno,String player,double value)
	{
		this.slno=slno;
		this.player=player;
		this.value=Double.toString(value);
	}
	records(int slno,String player,String player2,int value)
	{
		this.slno=slno;
		this.player=player;
		this.value=Integer.toString(value);
		this.player2=player2;
	}
	public int getSlno() {
		return slno;
	}
	public void setSlno(int slno) {
		this.slno = slno;
	}
	public String getPlayer() {
		return player;
	}
	public void setPlayer(String player) {
		this.player = player;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public String getPlayer2() {
		return player2;
	}
	public void setPlayer2(String player2) {
		this.player2 = player2;
	}
}