

var app = new Vue({
	el: '#app',
	data: {
		DefaultLayout: [
			{
				logo: {
					imgSrc: 'https://fakeimg.pl/650x98/ff998f/000?text=LOGO(650x98)',
					link: '#',
				},
				menu: [
					{
						id: 'women',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=WOMEN',
						alt: 'women',
						width: '162.5'
					},
					{
						id: 'men',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=MEN',
						alt: 'men',
						width: '162.5'
					},
					{
						id: 'kids',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=KIDS',
						alt: 'kids',
						width: '162.5'
					},
					{
						id: 'baby',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=BABY',
						alt: 'baby',
						width: '162.5'
					}
				],
				banner: {
					imgSrc: 'https://fakeimg.pl/650x600/ff45f9/000?text=BANNER',
					link: '#',
				},
				button: {
					imgSrc: 'https://fakeimg.pl/650x150/f9903d/000?text=BUTTON',
					link: '#',
				},
				product: [
					{
						id: 'pd_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product01',
					},
					{
						id: 'pd_2',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product02',
					},
					{
						id: 'pd_3',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product03',
					},
					{
						id: 'pd_4',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product04',
					},
					{
						id: 'pd_5',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product05',
					},
					{
						id: 'pd_6',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product06',
					},
					{
						id: 'pd_7',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product07',
					},
					{
						id: 'pd_8',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product08',
					}
				],
				footer: {
					fb: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=fb(60x158)',
						link: ''
					},
					ig: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=ig(60x158)',
						link: ''
					},
					line: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=line(60x158)',
						link: ''
					}
				},
				footerContent: {
					id: 'footerContent',
					imgSrc: 'https://fakeimg.pl/470x158/000000/fff?text=footer-content(470x158)',
				}
			},
			{
				logo: {
					imgSrc: 'https://fakeimg.pl/650x98/ff998f/000?text=LOGO(650x98)',
					link: '#',
				},
				menu: [
					{
						id: 'women',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=WOMEN',
						alt: 'women',
						width: '162.5'
					},
					{
						id: 'men',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=MEN',
						alt: 'men',
						width: '162.5'
					},
					{
						id: 'kids',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=KIDS',
						alt: 'kids',
						width: '162.5'
					},
					{
						id: 'baby',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=BABY',
						alt: 'baby',
						width: '162.5'
					}
				],
				banner: {
					imgSrc: 'https://fakeimg.pl/650x600/ff45f9/000?text=BANNER',
					link: '#',
				},
				button: {
					imgSrc: 'https://fakeimg.pl/650x150/f9903d/000?text=BUTTON',
					link: '#',
				},
				productS: [
					{
						id: 'pds_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'pds_1',
					},
					{
						id: 'pds_2',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'pds_2',
					},
				],
				productL: [
					{
						id: 'pdL_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/55d355/000?text=MEN-left',
						alt: 'pdL_1',
					},
					{
						id: 'pdL_2',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/533655/000?text=MEN-left',
						alt: 'pdL_2',
					},
					{
						id: 'pdL_3',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/3dff00/000?text=MEN-left',
						alt: 'pdL_3',
					},
				],
				productR: [
					{
						id: 'pdr_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/553dd5/000?text=MEN-right',
						alt: 'pdr_1',
					},
					{
						id: 'pdr_2',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/5995d3/000?text=MEN-right',
						alt: 'pdr_2',
					},
					{
						id: 'pdr_3',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/669d3d/000?text=MEN-right',
						alt: 'pdr_3',
					},
				],
				footer: {
					fb: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=fb(60x158)',
						link: ''
					},
					ig: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=ig(60x158)',
						link: ''
					},
					line: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=line(60x158)',
						link: ''
					}
				},
				footerContent: {
					id: 'footerContent',
					imgSrc: 'https://fakeimg.pl/470x158/000000/fff?text=footer-content(470x158)',
				}
			},
			{
				logo: {
					imgSrc: 'https://fakeimg.pl/650x98/ff998f/000?text=LOGO(650x98)',
					link: '#',
				},
				menu: [
					{
						id: 'women',
						link: '#',
						imgSrc: 'https://fakeimg.pl/163x88/ffffff/000?text=WOMEN',
						alt: 'women',
						width: '162.5'
					},
					{
						id: 'men',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=MEN',
						alt: 'men',
						width: '162.5'
					},
					{
						id: 'kids',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=KIDS',
						alt: 'kids',
						width: '162.5'
					},
					{
						id: 'baby',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=BABY',
						alt: 'baby',
						width: '162.5'
					}
				],
				banner: {
					imgSrc: 'https://fakeimg.pl/650x600/ff45f9/000?text=BANNER',
					link: '#',
				},
				button: {
					imgSrc: 'https://fakeimg.pl/650x150/f9903d/000?text=BUTTON',
					link: '#',
				},
				productL: [
					{
						id: 'pdL_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/55d355/000?text=MEN-left',
						alt: 'pdL_1',
					},
					{
						id: 'pdL_2',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/533655/000?text=MEN-left',
						alt: 'pdL_2',
					},
					{
						id: 'pdL_3',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/3dff00/000?text=MEN-left',
						alt: 'pdL_3',
					},
					{
						id: 'pdL_4',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/3d6d00/000?text=MEN-left',
						alt: 'pdL_4',
					},
				],
				productR: [
					{
						id: 'pdr_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/553dd5/000?text=MEN-right',
						alt: 'pdr_1',
					},
					{
						id: 'pdr_2',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/5995d3/000?text=MEN-right',
						alt: 'pdr_2',
					},
					{
						id: 'pdr_3',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/669d3d/000?text=MEN-right',
						alt: 'pdr_3',
					},
					{
						id: 'pdr_4',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/3d99d0/000?text=MEN-right',
						alt: 'pdr_4',
					},
				],
				footer: {
					fb: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=fb(60x158)',
						link: ''
					},
					ig: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=ig(60x158)',
						link: ''
					},
					line: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=line(60x158)',
						link: ''
					}
				},
				footerContent: {
					id: 'footerContent',
					imgSrc: 'https://fakeimg.pl/470x158/000000/fff?text=footer-content(470x158)',
				}
			},
		],
		EDMtemplate: [
			{
				logo: {
					id: 'logo',
					link: 'https://www.nuvfashion.com/',
					imgSrc: '',
				},
				menu: [{
					id: 'women',
					link: '',
					imgSrc: '',
					alt: 'women',
					width: '162.5'
				},
				{
					id: 'men',
					link: '',
					imgSrc: '',
					alt: 'men',
					width: '162.5'
				},
				{
					id: 'kids',
					link: '',
					imgSrc: '',
					alt: 'kids',
					width: '162.5'
				},
				{
					id: 'baby',
					link: '',
					imgSrc: '',
					alt: 'baby',
					width: '162.5'
				}
				],
				banner: {
					id: 'banner',
					link: '',
					imgSrc: '',
				},
				button: {
					link: '',
					imgSrc: '',
				},
				product: [
					{
						id: 'pd_1',
						link: '',
						imgSrc: '',
						alt: 'product01',
					},
					{
						id: 'pd_2',
						link: '',
						imgSrc: '',
						alt: 'product02',
					},
					{
						id: 'pd_3',
						link: '',
						imgSrc: '',
						alt: 'product03',
					},
					{
						id: 'pd_4',
						link: '',
						imgSrc: '',
						alt: 'product04',
					},
					{
						id: 'pd_5',
						link: '',
						imgSrc: '',
						alt: 'product05',
					},
					{
						id: 'pd_6',
						link: '',
						imgSrc: '',
						alt: 'product06',
					},
					{
						id: 'pd_7',
						link: '',
						imgSrc: '',
						alt: 'product07',
					},
					{
						id: 'pd_8',
						link: '',
						imgSrc: '',
						alt: 'product08',
					}
				],
				footerIcon: {
					fb: {
						id: 'fb',
						link: '',
						imgSrc: '',
						alt: 'facebook',
					},
					ig: {
						id: 'ig',
						link: '',
						imgSrc: '',
						alt: 'instagram',
					},
					line: {
						id: 'line',
						link: '',
						imgSrc: '',
						alt: 'line',
					}
				},
				footerContent: {
					id: 'footerContent',
					imgSrc: '',
				}
			},
			{
				logo: {
					id: 'logo',
					link: 'https://www.nuvfashion.com/',
					imgSrc: '',
				},
				menu: [{
					id: 'women',
					link: '',
					imgSrc: '',
					alt: 'women',
					width: '162.5'
				},
				{
					id: 'men',
					link: '',
					imgSrc: '',
					alt: 'men',
					width: '162.5'
				},
				{
					id: 'kids',
					link: '',
					imgSrc: '',
					alt: 'kids',
					width: '162.5'
				},
				{
					id: 'baby',
					link: '',
					imgSrc: '',
					alt: 'baby',
					width: '162.5'
				}
				],
				banner: {
					id: 'banner',
					link: '',
					imgSrc: '',
				},
				button: {
					link: '',
					imgSrc: '',
				},
				productS: [
					{
						id: 'pds_1',
						link: '',
						imgSrc: '',
						alt: 'product01',
					},
					{
						id: 'pds_2',
						link: '',
						imgSrc: '',
						alt: 'product02',
					},
				],
				productL: [
					{
						id: 'pdl_1',
						link: '',
						imgSrc: '',
						alt: 'product01_L',
					},
					{
						id: 'pdl_2',
						link: '',
						imgSrc: '',
						alt: 'product02_L',
					},
					{
						id: 'pdl_3',
						link: '',
						imgSrc: '',
						alt: 'product03_L',
					},
				],
				productR: [
					{
						id: 'pdr_1',
						link: '',
						imgSrc: '',
						alt: 'product01_R',
					},
					{
						id: 'pdr_2',
						link: '',
						imgSrc: '',
						alt: 'product02_R',
					},
					{
						id: 'pdr_3',
						link: '',
						imgSrc: '',
						alt: 'product03_R',
					},
				],
				footerIcon: {
					fb: {
						id: 'fb',
						link: '',
						imgSrc: '',
						alt: 'facebook',
					},
					ig: {
						id: 'ig',
						link: '',
						imgSrc: '',
						alt: 'instagram',
					},
					line: {
						id: 'line',
						link: '',
						imgSrc: '',
						alt: 'line',
					}
				},
				footerContent: {
					id: 'footerContent',
					imgSrc: '',
				}
			},
			{
				logo: {
					id: 'logo',
					link: 'https://www.nuvfashion.com/',
					imgSrc: '',
				},
				menu: [{
					id: 'women',
					link: '',
					imgSrc: '',
					alt: 'women',
					width: '162.5'
				},
				{
					id: 'men',
					link: '',
					imgSrc: '',
					alt: 'men',
					width: '162.5'
				},
				{
					id: 'kids',
					link: '',
					imgSrc: '',
					alt: 'kids',
					width: '162.5'
				},
				{
					id: 'baby',
					link: '',
					imgSrc: '',
					alt: 'baby',
					width: '162.5'
				}
				],
				banner: {
					id: 'banner',
					link: '',
					imgSrc: '',
				},
				button: {
					link: '',
					imgSrc: '',
				},
				productL: [
					{
						id: 'pdl_1',
						link: '',
						imgSrc: '',
						alt: 'product01_L',
					},
					{
						id: 'pdl_2',
						link: '',
						imgSrc: '',
						alt: 'product02_L',
					},
					{
						id: 'pdl_3',
						link: '',
						imgSrc: '',
						alt: 'product03_L',
					},
					{
						id: 'pdl_4',
						link: '',
						imgSrc: '',
						alt: 'product04_L',
					},
				],
				productR: [
					{
						id: 'pdr_1',
						link: '',
						imgSrc: '',
						alt: 'product01_R',
					},
					{
						id: 'pdr_2',
						link: '',
						imgSrc: '',
						alt: 'product02_R',
					},
					{
						id: 'pdr_3',
						link: '',
						imgSrc: '',
						alt: 'product03_R',
					},
					{
						id: 'pdr_4',
						link: '',
						imgSrc: '',
						alt: 'product04_R',
					},
				],
				footerIcon: {
					fb: {
						id: 'fb',
						link: '',
						imgSrc: '',
						alt: 'facebook',
					},
					ig: {
						id: 'ig',
						link: '',
						imgSrc: '',
						alt: 'instagram',
					},
					line: {
						id: 'line',
						link: '',
						imgSrc: '',
						alt: 'line',
					}
				},
				footerContent: {
					id: 'footerContent',
					imgSrc: '',
				}
			},
		],
		oupputData: '',		
		isOpenNav: false,
		UTMData: [],
		oupputUTMHTML: []	
	},	
	methods: {
		outputEDMHtml() {
			const preview = document.getElementById('preview');
			this.oupputData = preview.firstChild.outerHTML;
			this.CreateUTMHTML();
		},
		focusImg(id, i) {
			const edmTable_td = document.querySelectorAll('.edmTable_td');
			const target = document.getElementById(id);
			edmTable_td.forEach((item) => {
				item.classList.remove('l-targetFocus_link', 'l-targetFocus_img');
			})
			switch (i) {
				case 0:
					console.log(target);
					target.classList.add('l-targetFocus_link');
					break;
				case 1:
					console.log(target);
					target.classList.add('l-targetFocus_img');
					break;
			}
		},
		blurImg() {
			const edmTable_td = document.querySelectorAll('.edmTable_td img');
			edmTable_td.forEach((item) => {
				item.classList.remove('l-targetFocus_img', 'l-targetFocus_link');
			})
		},
		openNav() {

		},
		closeNav() {

		},

		addEdmData(data,i){
			const vm = this;
			const edm = vm.EDMtemplate[i];
			if(edm.product[0].link){
				edm.logo.link = '';
				edm.logo.imgSrc = '';
				edm.menu.forEach((item)=>{
					item.link = '';
					item.imgSrc = '';
				})
				edm.footerIcon.fb.link = '';
				edm.footerIcon.ig.link = '';
				edm.footerIcon.line.link = '';
				edm.footerIcon.fb.imgSrc = '';
				edm.footerIcon.ig.imgSrc = '';
				edm.footerIcon.line.imgSrc = '';
				edm.footerContent.imgSrc = '';

				edm.product.forEach((item)=>{
					item.link = '';
					item.imgSrc = '';
				})
			}
			edm.logo.link = data[0].logoLink + '?utm';
			edm.logo.imgSrc = data[0].logoImg;
			edm.menu.forEach((item,key)=>{
				const link = 'menuLink_' + (key+1);
				const img = 'menuImg_' + (key+1);
				item.link = data[0][link] + '?utm';
				item.imgSrc = data[0][img];
			})
			edm.footerIcon.fb.link = data[0].fbLink;
			edm.footerIcon.ig.link = data[0].igLink;
			edm.footerIcon.line.link = data[0].lineLink;
			edm.footerIcon.fb.imgSrc = data[0].fbImg;
			edm.footerIcon.ig.imgSrc = data[0].igImg;
			edm.footerIcon.line.imgSrc = data[0].lineImg;
			edm.footerContent.imgSrc = data[0].mailImg;

			edm.product.forEach((item,key)=>{
				const link = 'pdLink_' + (key+1);
				const img = 'pdImg_' + (key+1);
				item.link = data[0][link] + '?utm';
				item.imgSrc = data[0][img];
			})
		},
		importData(e,i) {
			var vm = this;
			var files = e.target.files;
			var fileReader = new FileReader();
			fileReader.onload = function (ev) {
				try {
					var data = ev.target.result
					var workbook = XLSX.read(data, {
						type: 'binary'
					}) // 以二進位制流方式讀取得到整份excel表格物件
					var persons = []; // 儲存獲取到的資料
				} catch (e) {
					console.log('檔案型別不正確');
					return;
				}
				// 表格的表格範圍，可用於判斷表頭是否數量是否正確
				var fromTo = '';
				// 遍歷每張表讀取
				for (var sheet in workbook.Sheets) {
					if (workbook.Sheets.hasOwnProperty(sheet)) {
						fromTo = workbook.Sheets[sheet]['!ref'];
						console.log(fromTo);
						persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
						// break; // 如果只取第一張表，就取消註釋這行
					}
				}
				//在控制檯打印出來表格中的資料
				console.log(persons,i);
				vm.addEdmData(persons,i);

				//push excel utm data to object
				vm.UTMData = [];
				for(let i = 0; i < persons.length; i++){
					let camIndex = (i + 1).toString();
					vm.UTMData.push({'utm_source' : 'EDM', 'utm_medium': persons[i].utm_medium, 'utm_campaign': persons[i].utm_campaign + camIndex});
				}
				console.log(vm.UTMData);

			};
			// 以二進位制方式開啟檔案
			fileReader.readAsBinaryString(files[0]);
		},
		CreateUTMHTML(){
			const vm = this;
			vm.oupputUTMHTML = [];
			let utmStr = '';
			//將output的HTML的連結加上utm參數
			for(let index in vm.UTMData){
				utmStr = `utm_source=${vm.UTMData[index].utm_source}&amp;utm_medium=${vm.UTMData[index].utm_medium}&amp;utm_campaign=${vm.UTMData[index].utm_campaign}`
				htmlStr = vm.oupputData.replace(/utm/g, utmStr);
				vm.oupputUTMHTML.push(htmlStr);
				// console.log(vm.UTMData[index].utm_campaign);
			}	
			console.log(vm.oupputUTMHTML);		
		}
	},
	computed: {
		toNumber() {
			this.nowEDMTemplateIndex = parseInt(this.nowEDMTemplateIndex);
		},
	},


});

