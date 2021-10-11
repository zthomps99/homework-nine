var MODEL = (function() {
    var _homeContent = `<div class="home">
    <div class="triangle-topleft"></div>
    <h1><span>I</span>UPUI</h1>
    <p class="heroText"><span>•</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br><br> <span>•</span>Libero repellat ut, quae magnam expedita non nobis, nisi corrupti reiciendis fugit asperiores corporis id eaque et.<br><br> <span>•</span>Vero reprehenderit voluptates vitae aliquid!</p>
    <div class="triangle-bottomright"></div>
</div>
<div class="alertBanner">
    <img src="images/icons/bell-regular-24.png">
    <p><span>Stay safe, stay healthy.</span> - Click here for more COVID-19 information.</p>
</div>
<div class="homeContent">
    <h1>Find your new home at IUPUI.</h1>
    <div class="holder">
        <div class="holderImage"><img src="images/https___specials-images.forbesimg.com_imageserve_6052170a9df9bdf69d63f201_0x0.jpg"></div>
        <div class="holderImage"><img src="images/106922887-1628206615260-gettyimages-887132600-as1700__08.jpeg"></div>
        <div class="holderImage"><img src="images/College_Students_Masks_1296x728-header-1-1296x729.jpg"></div>
    </div>
    <div class="contentHolder">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod accusantium vel facere. Ratione nisi iure praesentium? Numquam quas vitae quidem nam reprehenderit iusto cumque quia! Aut libero ea rem. Maxime!</p>
        <p>Sunt saepe temporibus odit quisquam dolores praesentium modi aliquid eveniet assumenda. Eveniet culpa ratione nam ad voluptate hic sit eos iste temporibus odit assumenda numquam magnam, iusto et fuga mollitia!</p>
        <p>Quibusdam culpa omnis sunt, exercitationem temporibus ab at voluptate inventore amet totam laborum? Eveniet repellendus quo natus voluptate, assumenda minus. Minima distinctio, nesciunt at praesentium reprehenderit soluta doloremque est ipsa.</p>
    </div>
</div>
<footer>
    <div class="socialRow">
        <img src="images/icons/facebook-circle-logo-24.png">
        <img src="images/icons/instagram-logo-24.png">
        <img src="images/icons/twitter-logo-24.png">
    </div>
    <div class="footerHolder">
        <div class="footerInside">
            <h1>About Us</h1>
            <ul>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
            </ul>
        </div>
        <div class="footerInside">
            <h1>Services</h1>
            <ul>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
            </ul>
        </div>
        <div class="footerInside">
            <h1>Resources</h1>
            <ul>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
            </ul>
        </div>
        <div class="footerInside">
        <h1>Administration</h1>
        <ul>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor.</li>
        </ul>
    </div>
    <div class="footerInside">
        <h1>Campus Life</h1>
        <ul>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor.</li>
        </ul>
    </div>
    </div>
</footer>`;
    var _aboutContent = `    <div class="aboutWrapper">
    <div class="searchBar">
        <img src="images/icons/search-alt-regular-24.png">
        <input type="text" placeholder="Search..">
    </div>        
    <div class="about"><img src="images/Indy.jpg"></div>
    <div class="aboutContent">
        <div class="aboutSubContent">
            <h1>Strive for greatness.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, modi distinctio? Dignissimos corporis officiis incidunt a esse quae ex, alias cumque, nulla assumenda optio repellat aliquam! Quod similique corporis accusantium.</p>
        </div>
        <div class="aboutSubContent">
            <h1>Take hold of your future.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, modi distinctio? Dignissimos corporis officiis incidunt a esse quae ex, alias cumque, nulla assumenda optio repellat aliquam! Quod similique corporis accusantium.</p>
        </div>
        <div class="aboutSubImg"><img src="images/iStock-914314318.jpg"></div>
    </div>
    <div class="aboutBanner"></div>
</div>
<footer>
    <div class="socialRow">
        <img src="images/icons/facebook-circle-logo-24.png">
        <img src="images/icons/instagram-logo-24.png">
        <img src="images/icons/twitter-logo-24.png">
    </div>
    <div class="footerHolder">
        <div class="footerInside">
            <h1>About Us</h1>
            <ul>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
            </ul>
        </div>
        <div class="footerInside">
            <h1>Services</h1>
            <ul>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
            </ul>
        </div>
        <div class="footerInside">
            <h1>Resources</h1>
            <ul>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
            </ul>
        </div>
        <div class="footerInside">
            <h1>Administration</h1>
            <ul>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
            </ul>
        </div>
        <div class="footerInside">
            <h1>Campus Life</h1>
            <ul>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
            </ul>
        </div>
    </div>
</footer>`;

    var _updateView = function(idName){
        console.log(idName);
        var pageContent = "_" + idName;
        $("#app").html(eval(pageContent));
    }

    return {
        updateView: _updateView,
    };

})();