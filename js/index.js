let contadorClicks = 0;

$(document).ready(function() {



    $('#joinusName').focusout(function() {
        console.log("Sali del foco nombre")

        if ($('#joinusName')[0].value == '' || $('#joinusName')[0].value == null) {
            document.getElementsByName("joinusNameAlertName")[0].classList.remove('hide');
        } else {
            document.getElementsByName("joinusNameAlertName")[0].classList.add('hide');
            console.log("1")
            
        }

        
    })

    $('#joinusSurName').focusout(function() {
        console.log("Sali del foco nombre")

        if ($('#joinusSurName')[0].value == '' || $('#joinusSurName')[0].value == null) {
            document.getElementsByName("joinusNameAlertSurName")[0].classList.remove('hide');
        } else {
            document.getElementsByName("joinusNameAlertSurName")[0].classList.add('hide');
            console.log("1")
            
        }

        
    })

    $('#joinusSurName').focusout(function() {
        console.log("Sali del foco nombre")

        if ($('#joinusFone')[0].value == '' || $('#joinusFone')[0].value == null) {
            document.getElementsByName("joinusNameAlertFone")[0].classList.remove('hide');
        } else {
            document.getElementsByName("joinusNameAlertFone")[0].classList.add('hide');
            console.log("1")
            
        }

        
    })

    $('#joinusEmail').focusout(function() {
        console.log("Sali del foco correo")
        
        
        if ($('#joinusEmail')[0].value == '' || $('#joinusEmail')[0].value == null) {
            document.getElementsByName("joinusNameAlertCorreo")[0].classList.remove('hide');

            document.getElementsByName("joinusNameAlertCorreoFormato")[0].classList.add('hide');
            
       

        } else {
            document.getElementsByName("joinusNameAlertCorreo")[0].classList.add('hide');
            console.log("2")
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
            if(!regexEmail.test(joinusEmail.value)){
                document.getElementsByName("joinusNameAlertCorreoFormato")[0].classList.remove('hide');
                    
            } 
            else 
            {
                document.getElementsByName("joinusNameAlertCorreoFormato")[0].classList.add('hide');
                
            }    
    
      
            }
     
    }) 

    
    $('#joinus').submit(function(event) {
        
        console.log("Formulario enviado")
        event.preventDefault();
    });

$(document).ready(function() {
    $('#joinusNameRegistro').focusout(function() {
        console.log("Sali del foco nombre")

        if ($('#joinusNameRegistro')[0].value == '' || $('#joinusNameRegistro')[0].value == null) {
            document.getElementsByName("joinusNameAlertNameRegistro")[0].classList.remove('hide');
        } else {
            document.getElementsByName("joinusNameAlertNameRegistro")[0].classList.add('hide');
            console.log("1")
            
        }

        
    })

    $('#joinusEmailRegistro').focusout(function() {
        console.log("Sali del foco correo")
        
        
        if ($('#joinusEmailRegistro')[0].value == '' || $('#joinusEmailRegistro')[0].value == null) {
            document.getElementsByName("joinusNameAlertCorreoRegistro")[0].classList.remove('hide');

            document.getElementsByName("joinusNameAlertCorreoFormatoRegistro")[0].classList.add('hide');
            
       

        } else {
            document.getElementsByName("joinusNameAlertCorreoRegistro")[0].classList.add('hide');
            console.log("2")
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
            if(!regexEmail.test(joinusEmailRegistro.value)){
                document.getElementsByName("joinusNameAlertCorreoFormatoRegistro")[0].classList.remove('hide');
                    
            } 
            else 
            {
                document.getElementsByName("joinusNameAlertCorreoFormatoRegistro")[0].classList.add('hide');
                
            }    
    
      
            }
     
    }) 

  
    
    $('#joinusRegistro').submit(function(event) {
        
        console.log("Formulario enviado")
        event.preventDefault();
    });
})

    $('#button_api_animales').click(function() {
        $.get(`https://cat-fact.herokuapp.com/facts`, 
            function(data) {
                console.log(data)
                
                    $("#datos_animales").append("<ul><li>"+data[0].text+"</li><li>"+data[1].text+"</li><li>"+data[2].text+"</li><li>"+data[3].text+"</li></ul>");
                    console.log(data[0].text);
                    console.log(data[1].text);
                    console.log(data[2].text);
                    console.log(data[3].text);
            })
        
    })

   
    
});









var RegionesYcomunas = {

	"regiones": [{
			"NombreRegion": "Arica y Parinacota",
			"comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
	},
		{
			"NombreRegion": "Tarapac??",
			"comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Cami??a", "Colchane", "Huara", "Pica"]
	},
		{
			"NombreRegion": "Antofagasta",
			"comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollag??e", "San Pedro de Atacama", "Tocopilla", "Mar??a Elena"]
	},
		{
			"NombreRegion": "Atacama",
			"comunas": ["Copiap??", "Caldera", "Tierra Amarilla", "Cha??aral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
	},
		{
			"NombreRegion": "Coquimbo",
			"comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicu??a", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbal??", "Monte Patria", "Punitaqui", "R??o Hurtado"]
	},
		{
			"NombreRegion": "Valpara??so",
			"comunas": ["Valpara??so", "Casablanca", "Conc??n", "Juan Fern??ndez", "Puchuncav??", "Quintero", "Vi??a del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa Mar??a", "Quilpu??", "Limache", "Olmu??", "Villa Alemana"]
	},
		{
			"NombreRegion": "Regi??n del Libertador Gral. Bernardo O???Higgins",
			"comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Do??ihue", "Graneros", "Las Cabras", "Machal??", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requ??noa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Ch??pica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
	},
		{
			"NombreRegion": "Regi??n del Maule",
			"comunas": ["Talca", "ConsVtuci??n", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "R??o Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curic??", "Huala????", "Licant??n", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuqu??n", "Linares", "Colb??n", "Longav??", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
	},
		{
			"NombreRegion": "Regi??n del Biob??o",
			"comunas": ["Concepci??n", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tom??", "Hualp??n", "Lebu", "Arauco", "Ca??ete", "Contulmo", "Curanilahue", "Los ??lamos", "Tir??a", "Los ??ngeles", "Antuco", "Cabrero", "Laja", "Mulch??n", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa B??rbara", "Tucapel", "Yumbel", "Alto Biob??o", "Chill??n", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chill??n Viejo", "El Carmen", "Ninhue", "??iqu??n", "Pemuco", "Pinto", "Portezuelo", "Quill??n", "Quirihue", "R??nquil", "San Carlos", "San Fabi??n", "San Ignacio", "San Nicol??s", "Treguaco", "Yungay"]
	},
		{
			"NombreRegion": "Regi??n de la Araucan??a",
			"comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufqu??n", "Puc??n", "Saavedra", "Teodoro Schmidt", "Tolt??n", "Vilc??n", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacaut??n", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Pur??n", "Renaico", "Traigu??n", "Victoria", ]
	},
		{
			"NombreRegion": "Regi??n de Los R??os",
			"comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "M??fil", "Mariquina", "Paillaco", "Panguipulli", "La Uni??n", "Futrono", "Lago Ranco", "R??o Bueno"]
	},
		{
			"NombreRegion": "Regi??n de Los Lagos",
			"comunas": ["Puerto Montt", "Calbuco", "Cocham??", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maull??n", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de V??lez", "Dalcahue", "Puqueld??n", "Queil??n", "Quell??n", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "R??o Negro", "San Juan de la Costa", "San Pablo", "Chait??n", "Futaleuf??", "Hualaihu??", "Palena"]
	},
		{
			"NombreRegion": "Regi??n Ais??n del Gral. Carlos Ib????ez del Campo",
			"comunas": ["Coihaique", "Lago Verde", "Ais??n", "Cisnes", "Guaitecas", "Cochrane", "O???Higgins", "Tortel", "Chile Chico", "R??o Ib????ez"]
	},
		{
			"NombreRegion": "Regi??n de Magallanes y de la Ant??rVca Chilena",
			"comunas": ["Punta Arenas", "Laguna Blanca", "R??o Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Ant??rVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
	},
		{
			"NombreRegion": "Regi??n Metropolitana de Santiago",
			"comunas": ["Cerrillos", "Cerro Navia", "Conchal??", "El Bosque", "Estaci??n Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maip??", "??u??oa", "Pedro Aguirre Cerda", "Pe??alol??n", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaqu??n", "San Miguel", "San Ram??n", "Vitacura", "Puente Alto", "Pirque", "San Jos?? de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhu??", "Curacav??", "Mar??a Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Pe??aflor"]
	}]
}


jQuery(document).ready(function () {

	var iRegion = 0;
	var htmlRegion = '<option value="sin-region">Seleccione regi??n</option><option value="sin-region">--</option>';
	var htmlComunas = '<option value="sin-region">Seleccione comuna</option><option value="sin-region">--</option>';

	jQuery.each(RegionesYcomunas.regiones, function () {
		htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].NombreRegion + '">' + RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
		iRegion++;
	});

	jQuery('#regiones').html(htmlRegion);
	jQuery('#comunas').html(htmlComunas);

	jQuery('#regiones').change(function () {
		var iRegiones = 0;
		var valorRegion = jQuery(this).val();
		var htmlComuna = '<option value="sin-comuna">Seleccione comuna</option><option value="sin-comuna">--</option>';
		jQuery.each(RegionesYcomunas.regiones, function () {
			if (RegionesYcomunas.regiones[iRegiones].NombreRegion == valorRegion) {
				var iComunas = 0;
				jQuery.each(RegionesYcomunas.regiones[iRegiones].comunas, function () {
					htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '">' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '</option>';
					iComunas++;
				});
			}
			iRegiones++;
		});
		jQuery('#comunas').html(htmlComuna);
	});
	jQuery('#comunas').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('selecciones Regi??n');
		} else if (jQuery(this).val() == 'sin-comuna') {
			alert('selecciones Comuna');
		}
	});
	jQuery('#regiones').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('selecciones Regi??n');
		}
	});

});
