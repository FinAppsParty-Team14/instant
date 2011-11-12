Titanium.UI.Button;
Titanium.UI.iPhone;
Titanium.UI.iPhone.AnimationStyle;

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FFF');

var nav;

buildLoginWindow();


function buildLoginWindow(e) {

	var win = Titanium.UI.createWindow({
		navBarHidden : true,
		title : 'Login Window',
		backgroundImage : 'img/bg.png',
		backgroundColor : '#fff'
	});
	win.open({
		//modal : true
	});

	var imgTop = Titanium.UI.createImageView({
		image : 'img/login-top.png',
		top : 0,
		left : 0,
		width : 319,
		height : 112
	});
	win.add(imgTop);

	var view = Titanium.UI.createView({
		top : 112,
		backgroundImage : 'img/bg.png',
		backgroundColor : '#fff'
	});
	var img1 = Ti.UI.createImageView({
		left : 10,
		width : 19,
		height : 20,
		image : 'img/icono_usuario.png',
	});
	var row1 = Ti.UI.createTableViewRow({
		height : '48',
		selectionStyle : Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	var label1 = Titanium.UI.createLabel({
		text : 'Identificació',
		left : 40
	});
	var usernametf = Ti.UI.createTextField({
		left : 180,
		right : 10,
		hintText : 'username',
		textAlign : "right",
		//	backgroundColor: '#ffffff',
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_NONE,
		//    borderColor: '#4444ff'
	});
	var img2 = Ti.UI.createImageView({
		left : 10,
		width : 31,
		height : 14,
		image : 'img/icono_numPIN.png',
	});
	var row2 = Ti.UI.createTableViewRow({
		height : '48',
		selectionStyle : Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	var label2 = Titanium.UI.createLabel({
		text : 'Num. Secret',
		left : 40
	});
	var passwordtf = Ti.UI.createTextField({
		left : 180,
		textAlign : "right",
		hintText : 'password',
		right : 10,
		passwordMask : true,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_NONE
	});
	row1.add(img1);
	row1.add(label1);
	row1.add(usernametf);
	row2.add(img2);
	row2.add(label2);
	row2.add(passwordtf);
	var data = [row1, row2];
	var table = Ti.UI.createTableView({
		data : data,
		style : Ti.UI.iPhone.TableViewStyle.GROUPED,
		backgroundColor : 'transparent'
	});

	var button = Ti.UI.createButton({
		backgroundImage : 'img/BUTT_drk_off.png',
		backgroundSelectedImage : 'img/BUTT_drk_on.png',
		backgroundDisabledImage : 'img/BUTT_gry_off.png',
		title : "Entrar",
		height : 45,
		width : 300,
		top : 150
	});

	button.addEventListener('click', function(e) {
		//win.close();
		buildMainWindow();
	});
	view.add(table);
	view.add(button);

	var buttonObjects = [{
		title : 'Idioma',
		width : 80,
		color:'#000000'
	}, {
		title : 'Ajuda',
		width : 80,
		color:'#000000'
	}, {
		image : 'img/logoCaixa.png',
		width : 140
	}];
	var buttonbar = Titanium.UI.createButtonBar({
		labels : buttonObjects,
		backgroundColor : '#ddd',
		top : 260,
		style : Titanium.UI.iPhone.SystemButtonStyle.BAR,
		height : 40,
		width : 300,
		left : 10,
	});

	view.add(buttonbar);
	win.add(view);

	var imgBot = Titanium.UI.createImageView({
		image : 'img/caixa-protect.png',
		top : 320,
		left : 0,
	});
	view.add(imgBot);

}


//buildMainWindow();


function buildMainWindow(e) {

	// create tab group
	var tabGroup = Titanium.UI.createTabGroup();

	//
	// create base UI tab and root window
	//
	var win1 = Titanium.UI.createWindow({
		title : 'Moviments',
		barImage : 'img/franjaAzul.png',
		titleImage : 'img/logo_blanco.png',
		backgroundImage : 'img/bg.png',
		backgroundColor : '#fff'
	});
	var tab1 = Titanium.UI.createTab({
		icon : 'img/icono_moviments.png',
		title : 'Moviments',
		window : win1
	});

	var win2 = Titanium.UI.createWindow({
		title : 'Cerca',
		barImage : 'img/franjaAzul.png',
		titleImage : 'img/logo_blanco.png',
		backgroundImage : 'img/bg.png',
		backgroundColor : '#fff'
	});
	var tab2 = Titanium.UI.createTab({
		icon : 'img/icono_cercar.png',
		title : 'Cerca',
		window : win2
	});

	var win3 = Titanium.UI.createWindow({
		title : 'Seguretat',
		barImage : 'img/franjaAzul.png',
		titleImage : 'img/logo_blanco.png',
		backgroundImage : 'img/bg.png',
		backgroundColor : '#fff'
	});
	var tab3 = Titanium.UI.createTab({
		icon : 'img/icono_seguretat.png',
		title : 'Seguretat',
		window : win3
	});

	buildRecentWin(win1);
	buildSearchWin(win2);
	buildSecurityWin(win3);
	//
	//  add tabs
	//
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	tabGroup.addTab(tab3);

	// open tab group
	tabGroup.open({
		transition : Titanium.UI.iPhone.AnimationStyle.CURL_UP
	});
	tabGroup.addEventListener('focus', function(e){
	    tabGroup._activeTab = e.tab
	    tabGroup._activeTabIndex = e.index
	    if ( tabGroup._activeTabIndex == -1) return;
	    Ti.API.info(tabGroup._activeTabIndex);
	    Ti.API.info(tabGroup._activeTab.title);
	    Ti.API._activeTab = tabGroup._activeTab;
	    Ti.API.info(Ti.API._activeTab.title);
	});

}



function buildRecentWin(win) {
	var data = [
		{title:"2011-11-08  10,25EUR",hasChild:true},
		{title:"2011-11-08  15,10EUR",hasChild:true},
		{title:"2011-11-09 110,00EUR",hasChild:true},
		{title:"2011-11-11  12,50EUR",hasChild:true},
	];
	var view = Ti.UI.createView({
		
	});
	var imgTop = Ti.UI.createImageView({
		image: 'img/top-movimientos.png',
		height: 50,
		top: 0,
		left: 0,
	});
	view.add(imgTop);
	var lblTop = Ti.UI.createLabel({
		text: 'Targeta Visa Classic **** 6727',
		top: 50,
		left: 10,
		backgroundColor: 'transparent',
		height: 50,
	});
	view.add(lblTop);
	var tableview = Titanium.UI.createTableView({
			top: 100,
//	        data: data,
	        backgroundColor: 'transparent',
	        rowBackgroundColor: 'white'
	});
	tableview.addEventListener('click',function(e){
		Ti.API.debug("tableview.click "+JSON.stringify(e));
		if(e.row && e.row.data) {
			buildDetailWin(win,e.row.data);
			Ti.API._activeTab.open(w,{animate:true});			
		}
	});
	view.add(tableview);
	win.add(view);
	var token = Titanium.App.Properties.getString('token');
	if(!token) {
		token='858d636a92a0be15d51e6516bca810947e682bebb686307d4b90ccc9b599f02c';
	}	
	var btRefresh = Titanium.UI.createButton({
		title: 'Refresh',
	});
	getCharges({
		url:'http://172.20.152.224:8080/instant/Query?token='+token,
		callback:function(data) {
				Ti.API.debug(JSON.stringify(data));
			Ti.API.debug("data="+data);
			var rows = [];
			for(var i=0; i<data.length; ++i) {
				var rec = data[i];
				Ti.API.debug(JSON.stringify(rec));
				var row = {title:rec.time+" "+rec.amount+"EUR",data:rec,hasChild:true};
				rows.push(row);
			}
			tableview.setData(rows);
		}
	});
}

function buildSearchWin(win) {
	var data = [
		{title:"Targeta **** 1234",hasChild:true},
		{title:"Des de 01/11/2011",hasChild:true},
		{title:"Fins 11/11/2011",hasChild:true},
		{title:"Descripció",hasChild:true},
	];
	var view = Ti.UI.createView({
		
	});
	var imgTop = Ti.UI.createImageView({
		image: 'img/top-buscar.png',
		height: 50,
		top: 0,
		left: 0,
	});
	view.add(imgTop);
	var lblTop = Ti.UI.createLabel({
		text: '',
		top: 50,
		left: 10,
		backgroundColor: 'transparent',
		height: 50,
	});
	view.add(lblTop);
	var tableview = Titanium.UI.createTableView({
			top: 100,
	        data: data,
	        backgroundColor: 'transparent',
	        rowBackgroundColor: 'white'
	});
	tableview.addEventListener('click',function(e){
	});
	view.add(tableview);
	win.add(view);
}


function buildSecurityWin(win) {
	var data = [
		{title:"Débito **** 5679",hasChild:true},
		{title:"Visa Clásica **** 1234",hasChild:true},
		{title:"Visa Oro **** 5678",hasChild:true},
		{title:"Visa Platino **** 1235",hasChild:true},
	];
	var view = Ti.UI.createView({
		
	});
	var imgTop = Ti.UI.createImageView({
		image: 'img/top-movimientos.png',
		height: 50,
		top: 0,
		left: 0,
	});
	view.add(imgTop);
	var lblTop = Ti.UI.createLabel({
		text: 'Cancelar Targeta',
		top: 50,
		left: 10,
		backgroundColor: 'transparent',
		height: 50,
	});
	view.add(lblTop);
	var tableview = Titanium.UI.createTableView({
			top: 100,
	        data: data,
	        backgroundColor: 'transparent',
	        rowBackgroundColor: 'white'
	});
	tableview.addEventListener('click',function(e){
	});
	view.add(tableview);
	win.add(view);
}

function buildDetailWin(curr,rec) {
	var btEdit = Titanium.UI.createButton({
		title: 'Edit',
	});
	var win = Titanium.UI.createWindow({
		title : 'Detalle',
		barImage : 'img/franjaAzul.png',
		titleImage : 'img/logo_blanco.png',
		backgroundImage : 'img/bg.png',
		backgroundColor : '#ffffff',
		rightNavButton: btEdit
	});	
	var view = Ti.UI.createView({
		
	});
	var imgTop = Ti.UI.createImageView({
		image: 'img/top-seguridad.png',
		height: 50,
		top: 0,
		left: 0,
	});
	view.add(imgTop);
	var lblTop = Ti.UI.createLabel({
		text: 'Targeta Visa Classic **** '+rec.cardNumber.substr(12,4),
		top: 50,
		left: 10,
		backgroundColor: 'transparent',
		height: 50,
	});
	view.add(lblTop);
	var tableview = Titanium.UI.createTableView({
			top: 100,
	        data: [
	        	{title:rec.time},
	        	{title:rec.amount+'EUR'},
	        	{title:rec.store},
	        ],
	        backgroundColor: 'transparent',
	        rowBackgroundColor: 'white'
	});
	var row = Ti.UI.createTableViewRow({
		height:240,
		selectionStyle : Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	var img = Ti.UI.createImageView({
		url: 'http://maps.googleapis.com/maps/api/staticmap?center=41.40244,2.19459&zoom=15&size=240x240&maptype=roadmap&markers=color:red%7Clabel:XS%7C41.40244,2.19459&sensor=false',
		height: 240,
	});
	row.add(img);
	tableview.appendRow(row);
	view.add(tableview);
	win.add(view);
	Ti.API._activeTab.open(win,{animate:true});			
}


if(true) {
	Titanium.Network.registerForPushNotifications({
		types : [Titanium.Network.NOTIFICATION_TYPE_BADGE, Titanium.Network.NOTIFICATION_TYPE_ALERT, Titanium.Network.NOTIFICATION_TYPE_SOUND],
		success : successCallback,
		error : errorCallback,
		callback : messageCallback
	});
}

function successCallback(e) {
    var request = Titanium.Network.createHTTPClient({
        onload:function(e) {
            if (request.status != 200 && request.status != 201) {
                request.onerror(e);
                return;
            }
        },
        onerror:function(e) {
            Ti.API.info("Register with Push Service failed. Error: "
                + e.error);
        }
    });
 
    // Register device token with UA
    request.open('GET', 'http://ascii164.com/api/device_tokens/'
        + e.deviceToken, true);
    request.send();
    // Save device token
    Titanium.App.Properties.setString('token', e.deviceToken);
}

function errorCallback(e) {
    Ti.API.info("Error during registration: " + e.error);
}
function messageCallback(e) {
     var message;
     if(e['aps'] != undefined) {
          if(e['aps']['alert'] != undefined){
               if(e['aps']['alert']['body'] != undefined){
                    message = e['aps']['alert']['body'];
               } else {
                    message = e['aps']['alert'];
               }
          } else {
               message = 'No Alert content';
          }
     } else {
          message = 'No APS content';
     }
     Ti.API.debug(message);
}



function getCharges(opt) {
	Ti.API.debug("In getCharges()");
	if(Titanium.Network.online) {
		// create table view data object

		var xhr = Titanium.Network.createHTTPClient();
		xhr.onerror = function(e) {
			var errstr = e.error;
			var match = /{NSLocalizedDescription=(.*?)}/.exec(e.error);
			errstr = match ? match[1] : errstr;
			Ti.API.debug("ERROR " + errstr + " e=" + JSON.stringify(e));
			alert('Error contacting server: '+errstr);
		};
		xhr.onload = function() {
			Ti.API.debug("HTTP response: "+this.responseText);
			var resp;
			try {
				resp = JSON.parse(this.responseText);
			} catch(e) {
				Ti.API.error(e);
				alert(e);
			}			
			if(resp.operations) {
				opt.callback(resp.operations);
			} else {
				Ti.API.debug("Invalid data");
			}
			//return resp;
		};
		var url = opt.url;
		xhr.setTimeout(60 * 1000);
		xhr.open('GET', url);
		xhr.send();
		Ti.API.debug("sending HTTP request to " + url);

	} else {
		alert("Can't show data without Internet connection.");
	}
}
