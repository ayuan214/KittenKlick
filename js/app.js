// ******************** MODEL ************************
var model = {
	currentKat: null;
	kittens: [
		{
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
		}
	]
};


//********************** Controller **************************

var octopus = {
	init: function() {
		kittenView.init();
		kittenList.init(); 
	}
}







//********************** View *********************************

var kittenView = {
	init: function() {
		// stores pointers 
		this.kittenElem = document.getElementbyId ('kitten');
		this.kittenNameElem = document.getElementbyId('kitten_name');
		this.kittenImageElem = document.getElementbyId('kitten_pic');
		this.kittenCountElem = document.getElementbyId('kitten_click');

		// make the on-click function to increment counter
		this.kittenImageElem.addEventListener('click', function() {
			// use controller to increase count in model 
		})

		this.render();
	},

	render: function() {
		var currentKat = octopus.getCurrentKitten(); // use ocotopus to get model to see which cat
		this.kittenCountElem.textContent = currentKat.clickCount;
		this.kittenImageElem.src = currentKat.imgSrc; 
		this.kittenNameElem.textContent = currentKat.name; 
	}
};

var kittenList = {
    init: function() {
        this.kittenListElem = document.getElementbyId('kitten-list');
        this.render; 
    },

    render: function() {
        var kitten, elem, i; 

        var kittens = ocotopus.getKittens(); // need to use octopus to get all kitten
        this.kittenListElem.innerHTML = ''; //empties out array
        for (i=0; i<kittens.length; i++) {
            kitten = kittens[i]

            elem = document.createElement('li');
            elem.text = kitten.name; 

            // create the event for when clicking the image of the cat changes
            elem.addEventListener('click', (function(kittenCopy) {
                return function() {
                    ocotpus.setCurrentKitten(kittenCopy); // use ocotopus to find the current kitten
                    kittenView.render();   
                };
            })(kitten)); 
            this.KittenListElem.appendChild(elem);
        }
    }
};

ocotopus.init(); 






