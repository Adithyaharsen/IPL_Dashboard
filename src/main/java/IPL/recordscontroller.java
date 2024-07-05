package IPL;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class recordscontroller
{
	
	private oarecordsrepository oarr;
	private srecordsrepository srr;
	
	public recordscontroller(oarecordsrepository oarrepository,srecordsrepository srrepository)
	{
		this.oarr = oarrepository;
		this.srr = srrepository;
	}
	
	@GetMapping("/records/season")
	public List<srecords> findall()
	{
		return srr.findAll();
	}
	
	@GetMapping("/records/overall/{title}")
	public List<records> getAllrecords(@PathVariable("title") String title)
	{
		switch(title)
		{
			case "Runs":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getRuns_P(),row.getRuns()))
						.collect(Collectors.toList());
			}
			case "Wickets":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getWickets_P(),row.getWickets()))
						.collect(Collectors.toList());
			}
			case "Fifties":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getFifties_P(),row.getFifties()))
						.collect(Collectors.toList());
			}
			case "Hundreds":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getHundreds_P(),row.getHundreds()))
						.collect(Collectors.toList());
			}
			case "Sixes":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getSixes_P(),row.getSixes()))
						.collect(Collectors.toList());
			}
			case "Fours":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getFours_P(),row.getFours()))
						.collect(Collectors.toList());
			}
			case "Highest_Score":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getHighest_Score_P(),row.getHighest_Score()))
						.collect(Collectors.toList());
			}
			case "Ducks":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getDucks_P(),row.getDucks()))
						.collect(Collectors.toList());
			}
			case "Highest_Average":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getHighest_Average_P(),row.getHighest_Average()))
						.collect(Collectors.toList());
			}
			case "Highest_Strikerate":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getHighest_Strikerate_P(),row.getHighest_Strikerate()))
						.collect(Collectors.toList());
			}
			case "Sixes_in_an_innings":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getSixes_inan_innings_P(),row.getSixes_inan_innings()))
						.collect(Collectors.toList());
			}
			case "Dismissals":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getDismiss_P(),row.getDismiss()))
						.collect(Collectors.toList());
			}
			case "Catches":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getCatches_P(),row.getCatches()))
						.collect(Collectors.toList());
			}
			case "Highest_Partnership":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getHighest_Partnership_P1(),row.getHighest_Partnership_P2(),row.getHighest_Partnership()))
						.collect(Collectors.toList());
			}
			case "Catches_in_an_Innings":
			{
				Iterable<oarecords> r = oarr.findAll();
				return StreamSupport.stream(r.spliterator(), false)
						.map(row -> new records(row.getSlno(),row.getCatches_Innings_P(),row.getCatches_Innings()))
						.collect(Collectors.toList());
			}
			default:
			{
				return null;
			}
		}
	}	
}