let firstElement = document.querySelector('#fdiv');
firstElement.setAttribute('class', 'divClass'); 
firstElement.setAttribute('class', 'second divclass');
firstElement.setAttribute('style', 'padding: 0.1rem');

let firstpara = document.querySelector('#fpara')
firstpara.classList.add('thirdclass');
firstpara.classList.remove('secondclass');

// there is also .toggle which add or removes the classes like if the class is present it will remove it and if the class is absent it
// will add that class 



// in this the set value changes the style from the base thats why when you write the padding part the blue background got removed 
// this is because the style got changed from style = "background-color: aqua; padding: 2rem; this to style', 'padding: 0.1rem') this 

// A table for the methods of dom style and their difference(kyuki bc bhot confusing hai)

// Method                                 Description                                         Replaces Previous Styles?                   Recommended?
/* element.style.cssText	             Sets all inline styles at once via JavaScript	    ✅ Yes (overwrites existing inline styles)	⚠️ Use with caution
element.setAttribute("style", "...")	 Same idea, but through an attribute	            ✅ Yes 	                                    ⚠️ Less common now
element.style.property = value	         Sets one property without affecting others	        ❌ No	                                    ✅ Best for small changes
element.classList	                     Applies full styles via CSS classes	            ❌ No	                                    ✅✅ Best practice9 */
