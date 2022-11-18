let nav = document.getElementsByClassName('slide-nav')[0]
let click = document.getElementsByClassName('click-icon')[0]
let rightAccess = document.getElementsByClassName('right-access')[0]
let leftAccess = document.getElementsByClassName('left-access')[0]
let close = document.querySelector('.slide-nav>section>section:nth-of-type(1)>a:nth-of-type(1)')
let brand = document.querySelector('.slide-nav>section>section:nth-of-type(2)>a:nth-of-type(2)')
let classification = document.querySelector('.slide-nav>section>section:nth-of-type(2)>a:nth-of-type(1)')
let aSelector = document.getElementsByTagName('a')

for (i = 0; i < aSelector.length; i++) {
    aSelector[i].addEventListener('click', (e) => {
        e.preventDefault()
    })
}


click.addEventListener('click', () => {
    nav.style.transform = 'translateX(0)'
})
close.addEventListener('click', () => {
    nav.style.transform = 'translateX(100%)'
})

brand.addEventListener('click', () => {
   
    brand.style.borderBottom = '1px solid #f2859a'
    brand.style.color = '#f2859a'
    classification.style.borderBottom = 'none'
    classification.style.color = 'black'
    rightAccess.style.display = 'none'

    leftAccess.innerHTML = ` <div class="input-group col-12">
    <input type="text" class="form-control" placeholder="دنبال کدوم برند میگردی ؟">
    <span class="input-group-apend">
        <button class="btn input-group-text"><i class="fa fa-search"></i></button>
    </span>


</div>

<section class="row text-center justify-content-around my-4">
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">لورال</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">گلدن رز</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">اسنس،</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">شون</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">مای</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">نئودرم</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">سینره</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">این لی</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">آردن</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">پریم</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">هیدرودرم</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">سی گل</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">نوت</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">نوتروژینا</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">کالیسا</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">سان سیف</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">سریتا</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">مدیلن</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">کامان</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">لافارر</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">سان اسکین</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">وچه</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">آدرا</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">الیوکس</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">ویتالیر</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">دیپ سنس</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">مورینگا</a>
    <a href="#" class="col-5 p-2 my-2 btn btn-outline-dark">هانادی</a>
</section>`


})


classification.addEventListener('click', () => {
    brand.style.borderBottom = 'none'
    brand.style.color = 'black'
    classification.style.borderBottom = '1px solid #f2859a'
    classification.style.color = '#f2859a'
    rightAccess.style.display = 'block'
    leftAccess.innerHTML = ''
})


// start slider section pink

let arrowSpan = document.querySelectorAll('.pink>span')
let pinkSection = document.querySelector('.pink>section')

let num = 0

arrowSpan[0].addEventListener('click', () => {
    statusdata = arrowSpan[0].getAttribute('data-status')
    widthSection = pinkSection.clientWidth
    if (statusdata == 'on') {
        if (widthSection < 1740) {
            num = num + 115
            pinkSection.style.transform = 'translateX(' + num + 'px)'
            arrowSpan[1].style.display = 'block'


            if (num === 805) {
                arrowSpan[0].setAttribute('data-status', 'off')
            }
        }

        if (widthSection === 1740) {
            num = num + 170
            pinkSection.style.transform = 'translateX(' + num + 'px)'
            arrowSpan[1].style.display = 'block'

            if (num === 1190) {
                arrowSpan[0].setAttribute('data-status', 'off')
            }
        }

        if (widthSection > 1740 && widthSection < 2790) {
            num = num + 230
            pinkSection.style.transform = 'translateX(' + num + 'px)'
            arrowSpan[1].style.display = 'block'

            if (num === 1380) {
                arrowSpan[0].setAttribute('data-status', 'off')
            }
        }

        if (widthSection >= 2790) {
            num = num + 280
            pinkSection.style.transform = 'translateX(' + num + 'px)'
            arrowSpan[1].style.display = 'block'

            if (num === 1120) {
                arrowSpan[0].setAttribute('data-status', 'off')
            }
        }

    }


})

arrowSpan[1].addEventListener('click', () => {


    if (widthSection < 1740) {
        num = num - 115
        pinkSection.style.transform = 'translateX(' + num + 'px)'

        if (num === 0) {
            arrowSpan[1].style.display = 'none'
            arrowSpan[0].setAttribute('data-status', 'on')
        }
    }

    if (widthSection === 1740) {
        num = num - 170
        pinkSection.style.transform = 'translateX(' + num + 'px)'

        if (num === 0) {
            arrowSpan[1].style.display = 'none'
            arrowSpan[0].setAttribute('data-status', 'on')
        }
    }

    if (widthSection > 1740 && widthSection < 2790) {
        num = num - 230
        pinkSection.style.transform = 'translateX(' + num + 'px)'

        if (num === 0) {
            arrowSpan[1].style.display = 'none'
            arrowSpan[0].setAttribute('data-status', 'on')
        }
    }

    if (widthSection >= 2790) {
        num = num - 280
        pinkSection.style.transform = 'translateX(' + num + 'px)'

        if (num === 0) {
            arrowSpan[1].style.display = 'none'
            arrowSpan[0].setAttribute('data-status', 'on')
        }
    }
})

// end slider section pink