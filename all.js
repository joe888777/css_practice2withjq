let weather_data=[]



$('.btn').click(function(){
	$('.btn').hide();
	$('.txt').text('loadingzzzzz')
	$.ajax({
		type:"get",
		url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWB-63EA49A5-AE51-4405-80E3-A6CEA394588E'
		,
		async:false,

		success:function(data){
			
			weather_data=data.records.locations[0].location[0];
			console.log(weather_data);
			$('.txt').text(JSON.stringify(weather_data));
			$("h1").text(weather_data.datasetDescription)
		}
	})
	let district=weather_data.locationName;
	console.log(district)
	elementdata=weather_data.weatherElement[0];//天氣現象
	description=elementdata.desription;
	console.log(elementdata);
	PoP12h=elementdata.time;
	console.log(PoP12h)
	let container=document.querySelector('.container');
	for(let i=0;i<PoP12h.length;i++){
		item=document.createElement('div');
		item.className='item';
		img=document.createElement('img');
		img.src="https://picsum.photos/400/400?random="+i.toString();
		let txt=document.createElement('div')
		txt.className='txt';
		let h2=document.createElement('h2');
		h2.textContent="北投區";
		txt.appendChild(h2);
		let pic=document.createElement('div')
		pic.className='pic';
		pic.appendChild(img);
		let ul=document.createElement('ul');
		let starttime=document.createElement('li');
		let endtime=document.createElement('li');
		let rainprob=document.createElement('li');
		starttime.textContent='開始時間：'+PoP12h[i].startTime;
		endtime.textContent='結束時間：'+PoP12h[i].endTime;
		rainprob.textContent='降雨機率'+PoP12h[i].elementValue[0].value+'%';
		ul.appendChild(starttime);
		ul.appendChild(endtime);
		ul.appendChild(rainprob);
		txt.appendChild(ul);
		item.appendChild(pic);
		item.appendChild(txt);
		container.appendChild(item);
	}
	


})




/*中央氣象局網站swagger
https://opendata.cwb.gov.tw/dist/opendata-swagger.html?fbclid=IwAR3ei8Fvpg5kyQX_ChMWQ7IWei0YklTagvXM52Wtxr52MP-yIWapfbLJZRE#/%E6%B0%A3%E5%80%99/get_v1_rest_datastore_C_B0025_001*/