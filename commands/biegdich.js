module.exports = {
    name: 'biegdich',
    aliases: [],
    description: "shows an image of someone that biegt himself",
    async execute(message, args, Discord){
        const biegdich = [
			'https://i.imgur.com/rLwTnaw.jpeg',
			'https://static-eu-cdn.eporner.com/photos/580795/doggy-style-is-the-best-style-880x660.jpg',
			'https://di.phncdn.com/videos/201909/24/250467621/original/(m=eaAaGwObaaaa)(mh=tcvnpAzhLOIjv2SS)4.jpg',
			'https://xxxymovies.com/contents/videos_screenshots/183000/183733/preview.jpg',
			'https://di.phncdn.com/videos/201909/27/251162402/original/(m=qK6174UbeaAaGwObaaaa)(mh=sPycB8f_X_PCsWot)0.jpg',
			'https://ci.phncdn.com/videos/202008/10/341263951/original/(m=qX28JZVbeaAaGwObaaaa)(mh=2JwOfb9pPs0SWmpF)0.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPutzf9yCZ4fCvFetrQsXMmt0_1bKgVIYkg&usqp=CAU',
			'https://lh3.googleusercontent.com/proxy/uTlNaU4IDlGYFF8pzN3FEQ-6oht-znOsXdjx_SJJJo9g9YmEYm1LUYPtsZu3uEnR2GJK4fv3BAtEXga7LVoHy3cPtlxy705jTHCg0mZJcwVOtyqcXXAorCj0CsqaWRsbl7FzUGNmL-U3uR7vMSikl1Wh',
			'https://www.extremerestraints.com/media/catalog/product/cache/1/image/640x/9df78eab33525d08d6e5fb8d27136e95/x/r/xr_ri610-model-male-wm.jpg',
			'https://images.pornpics.com/1280/201812/18/3470783/3470783_044_7b13.jpg',
			'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/43/1f/b9/431fb9c8154aa29b4672b229a21bb9ce/431fb9c8154aa29b4672b229a21bb9ce.30.jpg',
			'https://lh3.googleusercontent.com/proxy/IxrbFchD2A0CgTxyaJi7FEIZtwGwVXB5JG9TORexAgCp0IJjfh2o4ylbq7G0kU5WsrjpYnrV8Kq_G-uS8UW2yQksmtCdewOO6GrSxiemXkKYRbCCrlwyhT1DQJDKLdA',
			'https://finepov.com/wp-content/uploads/2019/10/best-pov-doggystyle-with-big-round-ass.jpg',
			'https://previews.123rf.com/images/kurtvate/kurtvate1112/kurtvate111200028/11785241-eine-junge-h%C3%BCbsche-frau-in-einem-kurzen-rock-und-bh-und-mit-einem-hut-auf-b%C3%BCckte-sich-und-zeigt-ihre-rosa-spit.jpg',
			'https://cdn.isselecta.com/2016-12/doggystyle-sex-on-the-table_700.gif',
			'https://ve11.pornve.com/i/03/00080/ykxsusaxdfhj.jpg',
			'https://tenor.com/view/hump-gif-13375503 ION',
			'https://tenor.com/view/hump-day-happy-meeting-sex-make-love-gif-15543099'
		];
        const rnd = parseInt(Math.random()*biegdich.length);
        await message.channel.send({files: [`${biegdich[rnd]}`] });
    }
}
