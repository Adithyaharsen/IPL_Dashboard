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


sql1="SELECT DISTINCT team1 FROM match_data"
cursor.execute(sql1)
result=cursor.fetchall();
for i in result:
    for k in i:
        sql2="SELECT COUNT(*) FROM match_data GROUP BY team1 HAVING team1 = %s"
        sql3="SELECT COUNT(*) FROM match_data GROUP BY team2 HAVING team2 = %s"
        matchplayed=0
        cursor.execute(sql2,i)
        a=cursor.fetchone()
        for j in a:
            matchplayed+=int(j)
        cursor.execute(sql3,i)
        a=cursor.fetchone()
        for j in a:
            matchplayed+=int(j)
        sql4="SELECT COUNT(*) FROM match_data GROUP BY winner HAVING winner = %s"
        matchwon=0
        cursor.execute(sql4,i)
        a=cursor.fetchone()
        for j in a:
           matchwon+=int(j)
        sql5 = "INSERT INTO team(teamname,totalmatches,totalwins) VALUES (%s,%s,%s)"
        cursor.execute(sql5,(k,matchplayed,matchwon))
        print("Team inserted")

with open('points_table.csv', mode='r')as csv_file:
    #read csv using reader class
    csv_reader = csv.reader(csv_file)
    #skip header
    header = next(csv_reader)
    #Read csv row wise and insert into table
    i=1001
    for row in csv_reader:
        sql = "INSERT INTO points_table(season,iplrank,name,short_name,matchesplayed,matcheswon,matcheslost,noresult,points,nrr,id) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        cursor.execute(sql, tuple(row)+(i,))
        i+=1
        print("Record inserted")
conn.commit()
cursor.close()


 
