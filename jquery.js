//jquery dom
$(document).ready(function(){
    let h2 = $('h2')
    console.log(h2.text("Selamat Datang"))
    h2.append("<i> Pelanggan</i>")
    h2.prepend("<i>Hallo,</i>")
    h2.after("<i> hellooo </i>")
    h2.before("<i> ini before </i>")
    // let input = $('input')
    // console.log(input.val(""))
    // h2.empty()
    // h2.remove()

    // h2.addClass('biru');
    // h2.removeClass('border')
    let style = {
        color: 'salmon',
        fontSize: '100px'
    }
    h2.css(style)

    let button = $('button')
    let input = $('input')
    let p = $('p')

    let counter = true
    button.on('click', function(){
        p.toggleClass('biru')
    })
})

