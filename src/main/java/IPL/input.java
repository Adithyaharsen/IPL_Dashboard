package IPL;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class input implements ApplicationRunner{
	
	@Autowired
	private service s ;
	
	@Override
	public void run(ApplicationArguments args) throws Exception{
		 	
			//MATCH_DATA
				String parentDir = Paths.get("").toAbsolutePath().toString();	        
			    String csvFile = parentDir + "/src/main/resources/csvfiles/match_data.csv";
				String line = "";
				DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {
					line = br.readLine();
					System.out.println();
					while ((line = br.readLine()) != null) {
						String[] data = line.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);
						Date parsedDate = dateFormat.parse(data[2]);
						java.sql.Date sqlDate = new java.sql.Date(parsedDate.getTime());
						match_data temp = new match_data();
						temp.id= 			Integer.parseInt(data[0].trim().replace("\"", ""));
						temp.season=		Integer.parseInt(data[5].trim().replace("\"", ""));
						temp.city=			data[1];
						temp.date=			sqlDate;
						temp.team1=			data[6];
						temp.team2=			data[7];
						temp.toss_winner=	data[9];
						temp.toss_decision=	data[8];
						temp.result=		data[17];
						temp.dl_applied=	data[3];
						temp.winner=		data[16];
						temp.win_by_runs=	Integer.parseInt(data[14].trim().replace("\"", ""));
						temp.win_by_wickets=Integer.parseInt(data[15].trim().replace("\"", ""));
						temp.player_of_match=data[4];
						temp.venue=			data[13];
						temp.umpire1=		data[10];
						temp.umpire2=		data[11];
						temp.umpire3=		data[12];
		
						s.addmatch(temp);
						System.out.println(); // Move to the next line
					}
				}
				catch (IOException e) {
					e.printStackTrace();
				}
				
			//TEAM
				parentDir = Paths.get("").toAbsolutePath().toString();	        
			    csvFile = parentDir + "/src/main/resources/csvfiles/team.csv";
				line = "";
				try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {
					line = br.readLine();
					System.out.println();
					while ((line = br.readLine()) != null) {
						String[] data = line.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);
						team temp = new team(data[0],Integer.parseInt(data[1].trim().replace("\"", "")),Integer.parseInt(data[2].trim().replace("\"", "")));
						s.addteam(temp);
						System.out.println(); // Move to the next line
					}
				}
				catch (IOException e) {
					e.printStackTrace();
				}
				
			//POINTS_TABLE
				parentDir = Paths.get("").toAbsolutePath().toString();	        
			    csvFile = parentDir + "/src/main/resources/csvfiles/pointstable.csv";
				line = "";
				try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {
					line = br.readLine();
					System.out.println();
					while ((line = br.readLine()) != null) {
						String[] data = line.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);
						points_table temp = new points_table(Integer.parseInt(data[9].trim().replace("\"", "")),Integer.parseInt(data[1].trim().replace("\"", "")),data[5],data[10],Integer.parseInt(data[3].trim().replace("\"", "")),Integer.parseInt(data[4].trim().replace("\"", "")),Integer.parseInt(data[2].trim().replace("\"", "")),Integer.parseInt(data[6].trim().replace("\"", "")),Integer.parseInt(data[8].trim().replace("\"", "")),Double.parseDouble(data[7]));
						s.addpointstable(temp);
						System.out.println(); // Move to the next line
					}
				}
				catch (IOException e) {
					e.printStackTrace();
				}
		
			//SRECORDS
				parentDir = Paths.get("").toAbsolutePath().toString();	        
			    csvFile = parentDir + "/src/main/resources/csvfiles/srecords.csv";
				line = "";
				try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {
					line = br.readLine();
					System.out.println();
					while ((line = br.readLine()) != null) {
						String[] data = line.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);
						srecords temp = new srecords(Integer.parseInt(data[0].trim().replace("\"", "")),data[13],data[12],data[8],Integer.parseInt(data[7].trim().replace("\"", "")),data[11],Integer.parseInt(data[10].trim().replace("\"", "")),data[6],Integer.parseInt(data[5].trim().replace("\"", "")),data[4],Integer.parseInt(data[3].trim().replace("\"", "")),data[9],data[2],data[1]);
						s.addsrecord(temp);
						System.out.println(); // Move to the next line
					}
				}
				catch (IOException e) {
					e.printStackTrace();
				}
			
			//OARECORDS
				parentDir = Paths.get("").toAbsolutePath().toString();	        
			    csvFile = parentDir + "/src/main/resources/csvfiles/oarecords.csv";
				line = "";
				try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {
					line = br.readLine();
					System.out.println();
					while ((line = br.readLine()) != null) {
						String[] data = line.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);
						oarecords temp = new oarecords(Integer.parseInt(data[0].trim().replace("\"", "")),data[1],Integer.parseInt(data[2].trim().replace("\"", "")),data[3],Integer.parseInt(data[4].trim().replace("\"", "")),data[5],Integer.parseInt(data[6].trim().replace("\"", "")),data[7],Integer.parseInt(data[8].trim().replace("\"", "")),data[9],Integer.parseInt(data[10].trim().replace("\"", "")),data[11],Double.parseDouble(data[12]),data[13],Integer.parseInt(data[14].trim().replace("\"", "")),data[15],data[16],Integer.parseInt(data[17].trim().replace("\"", "")),data[18],Double.parseDouble(data[19]),data[20],Integer.parseInt(data[21].trim().replace("\"", "")),data[22],Integer.parseInt(data[23].trim().replace("\"", "")),data[24],Integer.parseInt(data[25].trim().replace("\"", "")),data[26],Integer.parseInt(data[27].trim().replace("\"", "")),data[28],Integer.parseInt(data[29].trim().replace("\"", "")),data[30],Integer.parseInt(data[31].trim().replace("\"", "")));
						s.addoarecord(temp);
						System.out.println(); // Move to the next line
					}
				}
				catch (IOException e) {
					e.printStackTrace();
				}	
	}
}