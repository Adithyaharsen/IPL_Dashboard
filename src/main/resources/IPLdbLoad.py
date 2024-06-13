import mysql.connector as mysql
import csv
#Connect DB server and database
conn = mysql.connect(user='root', password='adithya2005', host='localhost', database='IPLDashboard')
cursor = conn.cursor()
#open the csv file
with open('match_info_data.csv', mode='r')as csv_file:
    #read csv using reader class
    csv_reader = csv.reader(csv_file)
    #skip header
    header = next(csv_reader)
    #Read csv row wise and insert into table
    for row in csv_reader:
        sql = "INSERT INTO match_data(id,season,city,date,team1,team2,toss_winner,toss_decision,result,dl_applied,winner,win_by_runs,win_by_wickets,player_of_match,venue,umpire1,umpire2,umpire3) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        cursor.execute(sql, tuple(row))
        print("Record inserted")
conn.commit()
cursor.close()
 
