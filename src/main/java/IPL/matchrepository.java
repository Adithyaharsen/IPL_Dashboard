package IPL;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.CrudRepository;

public interface matchrepository extends CrudRepository<match_data, Integer>
{	
	 List<match_data> findByTeam1OrTeam2OrderByDateDesc(String teamname1,String teamname2,PageRequest pageRequest);

	 List<match_data> findByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(String teamname1,LocalDate date1,LocalDate date2,String teamname2,LocalDate date3,LocalDate date4);
/*
 Or we can give the query to be run & make the method name simple
 		@Query("SELECT m FROM match_data m WHERE(m.team1 = :teamname OR m.team2 = :teamname) AND m.date BETWEEN :startDate and :endDate ORDER BY date DESC")
 		List<match_data> getMatchesByTeamInYear(@Param("teamname") String teamname,@Param("startDate") LocalDate startdate,@Param("endDate") LocalDate endDate);
 */
	 List<match_data> findByDateBetween(LocalDate date1,LocalDate date2);
	 
	 default List<match_data> findlatest4matchesbyteam(String teamname, int count)
	 {
		 return findByTeam1OrTeam2OrderByDateDesc(teamname,teamname,PageRequest.of(0, count));	 
	 }
	 
}