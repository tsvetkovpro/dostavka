if (!window.BX_YMapAddPlacemark)
{
	window.BX_YMapAddPlacemark = function(map, arPlacemark)
	{
		if (null == map)return false;
		if(!arPlacemark.LAT || !arPlacemark.LON)return false;
		var props = {};
		if (null != arPlacemark.TEXT && arPlacemark.TEXT.length > 0)
		{
			var value_view = '';
			if (arPlacemark.TEXT.length > 0)
			{
				var rnpos = arPlacemark.TEXT.indexOf("\n");
				value_view = rnpos <= 0 ? arPlacemark.TEXT : arPlacemark.TEXT.substring(0, rnpos);
			}
			props.popupText = '<div class="shop_popup">'+arPlacemark.TEXT.replace(/\n/g, '<br />')+'</div>'
			props.address = arPlacemark.TEXT.replace(/\n/g, '<br />');
			if(!arPlacemark.HREF) props.balloonContent = arPlacemark.TEXT.replace(/\n/g, '<br />');
			else props.hintContent = value_view;
		}
		var root = '/local/templates/storageat/images/logo-map.png';
		var obPlacemark = new ymaps.Placemark(
			[arPlacemark.LAT, arPlacemark.LON],
			props,
			{
				balloonCloseButton: true,
				iconImageHref: root,
				iconImageSize: [68, 68],
			    iconImageOffset: [-34, -68]

			}
		);
		if(!!arPlacemark.HREF){
			obPlacemark.events.add('click', function () {window.location.href = arPlacemark.HREF;});
			obPlacemark.events.add('mouseover', function() {infowindow.setContent(marker0.popupText);infowindow.open(mapObj,marker0);});
	        obPlacemark.events.add('mouseout', function() {infowindow.close(mapObj,marker0);});
    	}
		map.geoObjects.add(obPlacemark);
		return obPlacemark;
	}
}
if (!window.BX_YMapAddPolyline)
{
	window.BX_YMapAddPolyline = function(map, arPolyline)
	{
		if (null == map)return false;
		if (null != arPolyline.POINTS && arPolyline.POINTS.length > 1)
		{
			var arPoints = [];
			for (var i = 0, len = arPolyline.POINTS.length; i < len; i++){arPoints.push([arPolyline.POINTS[i].LAT, arPolyline.POINTS[i].LON]);}
		}
		else{return false;}
		var obParams = {clickable: true};
		if (null != arPolyline.STYLE)
		{
			obParams.strokeColor = arPolyline.STYLE.strokeColor;
			obParams.strokeWidth = arPolyline.STYLE.strokeWidth;
		}
		var obPolyline = new ymaps.Polyline(arPoints, {balloonContent: arPolyline.TITLE}, obParams);
		map.geoObjects.add(obPolyline);
		return obPolyline;
	}
}