// JavaScript Document


function renderStateValues() {
	
	var savingsAmount = "savings amount"
	
	var lowerCaseState = $("#state").val().toLowerCase();
	console.log(lowerCaseState);
	
		switch(lowerCaseState) {
			case "al":
			case "alabama":
			savingsAmount = "ALsavings";
			break;	
			case "alaska":
			case "ak":
			savingsAmount = "aksavings";
			break;	
			case "arizona":
			case "az":
			savingsAmount = "az savings";
			break;
			case "arkansas":
			case "ar":
			savingsAmount = "ark savings";
			break;		
			case "california":
			case "ca":
			savingsAmount = "ca savings";
			break;	
			case "colorado":
			case "co":
			savingsAmount = "co savings";
			break;	
			case "connecticut":
			case "ct":
			savingsAmount = "ct savings";
			break;
			case "deleware":
			case "de":
			savingsAmount = "de savings";
			break;
			case "district of columbia":
			case "dc":
			savingsAmount = "dc savings";
			break;
			case "florida":
			case "fl":
			savingsAmount = "fl savings";
			break;
			case "georgia":
			case "ga":
			savingsAmount = "georgia savings";
			break;
			case "hawaii":
			case "hi":
			savingsAmount = "hi savings";
			break;
			case "idaho":
			case "id":
			savingsAmount = "id savings";
			break;
			case "illinois":
			case "il":
			savingsAmount = "il savings";
			break;
			case "indiana":
			case "in":
			savingsAmount = "in savings";
			break;
			case "iowa":
			case "ia":
			savingsAmount = "iowa savings";
			break;
			case "kansas":
			case "ks":
			savingsAmount = "ks savings";
			break;
			case "kentucky":
			case "kt":
			savingsAmount = "kt savings";
			break;
			case "louisiana":
			case "la":
			savingsAmount = "ls savings";
			break;
			case "maine":
			case "me":
			savingsAmount = "me savings";
			break;
			case "maryland":
			case "md":
			savingsAmount = "md savings";
			break;
			case "massachusetts":
			case "ma":
			savingsAmount = "ms savings";
			break;
			case "michigan":
			case "mi":
			savingsAmount = "mi savings";
			break;
			case "minnesota":
			case "mn":
			savingsAmount = "mn savings";
			break;
			case "mississippi":
			case "ms":
			savingsAmount = "ms savings";
			break;
			case "missouri":
			case "mo":
			savingsAmount = "mo savings";
			break;
			case "montana":
			case "mt":
			savingsAmount = "mt savings";
			break;
			case "nebraska":
			case "ne":
			savingsAmount = "ne savings";
			break;
			case "nevada":
			case "nv":
			savingsAmount = "nv savings";
			break;
			case "new hampshire":
			case "nh":
			savingsAmount = "nh savings";
			break;
			case "new jersey":
			case "mj":
			savingsAmount = "nj savings";
			break;
			case "new mexico":
			case "nm":
			savingsAmount = "nm savings";
			break;
			case "new york":
			case "ny":
			savingsAmount = "ny savings";
			break;
			case "north carolina":
			case "nc":
			savingsAmount = "nc savings";
			break;
			case "north dakota":
			case "nd":
			savingsAmount = "nd savings";
			break;
			case "ohio":
			case "oh":
			savingsAmount = "oh savings";
			break;
			case "oklahoma":
			case "ok":
			savingsAmount = "ok savings";
			break;
			case "oregon":
			case "or":
			savingsAmount = "or savings";
			break;
			case "pennsylvania":
			case "pa":
			savingsAmount = "pa amount";
			break;
			case "rhode island":
			case "ri":
			savingsAmount = "ri amount";
			break;
			case "south carolina":
			case "sc":
			savingsAmount = "sc amount";
			break;
			case "south dakota":
			case "sd":
			savingsAmount = "sd savings";
			break;
			case "tennessee":
			case "tn":
			savingsAmount = "tn amount";
			break;
			case "texas":
			case "tx":
			savingsAmount = "tx savings";
			break;
			case "utah":
			case "ut":
			savingsAmount = "ut amount";
			break;
			case "vermont":
			case "vt":
			savingsAmount = "vt savings";
			break;
			case "virginia":
			case "va":
			savingsAmount = "va amount";
			break;
			case "washington":
			case "wa":
			savingsAmount = "wa amount";
			break;
			case "west virgina":
			case "wv":
			savingsAmount = "wv amount";
			break;
			case "wisconsin":
			case "wi":
			savingsAmount = "wi amount";
			break;
			case "wyoming":
			case "wy":
			savingsAmount = "wy amount";
			break;
	}
	$("#savings").html(savingsAmount);
};
