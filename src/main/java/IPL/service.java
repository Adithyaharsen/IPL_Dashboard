package IPL;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class service {

	@Autowired
	private matchrepository mr;
	
	@Autowired
	private oarecordsrepository oarr;
	
	@Autowired
	private points_table_repository ptr;
	
	@Autowired
	private srecordsrepository srr;
	
	@Autowired
	private teamrepository tr;
	
	public void addmatch(match_data md)
	{
		mr.save(md);
	}
	
	public void addoarecord(oarecords oar)
	{
		oarr.save(oar);
	}
	
	public void addpointstable(points_table pt)
	{
		ptr.save(pt);
	}
	
	public void addsrecord(srecords sr)
	{
		srr.save(sr);
	}
	
	public void addteam(team t)
	{
		tr.save(t);
	}
}