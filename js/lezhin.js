if(!window['lezhin']) {
	lezhin = {};
	( function (_O) {
    _O.init = () => {
      const v = _O.Vars;
      v.curRound = 32;
      v.curStage = 0;
      v.gameHistory = {
	'32': [],
        '16': [],
        '8': [],
        '4': [],
        '2': [],
        '1': []
      };
      v.lists = _O.Ctrl.getLists();
      _O.Ctrl.prevCancelOnOff();
    };
    _O.start = () => {
      _O.init();
      _O.Ctrl.gameNewStart.bind(_O.Ctrl)();
    };
    _O.Vars = {
      lists:null,
      curRound: 0,
      curStage: 0,
      maxRound: 32,
      gameHistory: null
    };
    _O.Ctrl = {
      getLists() {
        return [
          {
                     name: 'จองกุก (Jungkook) BTS',
            imgSrc: 'images/01.jpg',
            selected: false
          },
          {
            name: 'เลย์ (Lay) EXO',
            imgSrc: 'images/02.jpg',
            selected: false
          },
          {
            name: 'ชาอึนอู (Cha Eunwoo) ASTRO',
            imgSrc: 'images/03.jpg',
            selected: false
          },
          {
            name: 'แทยง (Taeyong) NCT, SuperM',
            imgSrc: 'images/04.jpg',
            selected: false
          },
          {
            name: 'มินกยู (Mingyu) SEVENTEEN',
            imgSrc: 'images/05.jpg',
            selected: false
          },
          {
            name: 'แบคฮยอน (Baekhyun) EXO, SuperM',
            imgSrc: 'images/06.jpg',
            selected: false
          },
          {
            name: 'แจ็คสัน (Jackson) GOT7',
            imgSrc: 'images/07.jpg',
            selected: false
          },
          {
            name: 'จีมิน (Jimin) BTS',
            imgSrc: 'images/08.jpg',
            selected: false
          },
          {
            name: 'หวังอี้ป๋อ (Wang Yibo) UNIQ',
            imgSrc: 'images/09.jpg',
            selected: false
          },
          {
            name: 'ซองฮวา (Seonghwa) ATEEZ',
            imgSrc: 'images/10.jpg',
            selected: false
          },
          {
            name: 'แบมแบม (bambam) GOT7',
            imgSrc: 'images/11.jpg',
            selected: false
          },
          {
            name: 'วี (V) BTS',
            imgSrc: 'images/12.jpg',
            selected: false
          },
          {
            name: 'เตนล์ (Ten) NCT, WayV, SuperM',
            imgSrc: 'images/13.jpg',
            selected: false
          },
          {
            name: 'จีดราก้อน (G-Dragon) BIGBANG',
            imgSrc: 'images/14.jpg',
            selected: false
          },
          {
            name: 'ซูบิน (Soobin) TXT',
            imgSrc: 'images/15.jpg',
            selected: false
          },
          {
            name: 'ยองเค (Young K)DAY6',
            imgSrc: 'images/16.jpg',
            selected: false

	  },
          {
            name: 'เฟลิกซ์ (Felix)Stray Kids',
            imgSrc: 'images/17.jpg',
            selected: false
          },
          {
            name: 'ไค (Kai) EXO, SuperM',
            imgSrc: 'images/18.jpg',
            selected: false
          },
          {
            name: 'คุน (Kun) NCT, WayV',
            imgSrc: 'images/19.jpg',
            selected: false
          },
          {
            name: 'ชูก้า (Suga) BTS',
            imgSrc: 'images/20.jpg',
            selected: false
          },
          {
            name: 'ชานยอล(Chanyeol) EXO',
            imgSrc: 'images/21.jpg',
            selected: false
          },
          {
            name: 'เฉิน (Chen) EXO',
            imgSrc: 'images/22.jpg',
            selected: false
          },
          {
            name: 'ซองแจ (Sungjae) BTOB',
            imgSrc: 'images/23.jpg',
            selected: false
          },
          {
            name: 'องซองอู (Ong Seong Wu)',
            imgSrc: 'images/24.jpg',
            selected: false
          },
          {
            name: 'ดีโอ (D.O.) EXO',
            imgSrc: 'images/25.jpg',
            selected: false
          },
          {
            name: 'จิน (Jin) BTS ',
            imgSrc: 'images/26.jpg',
            selected: false
          },
          {
            name: 'ชยอนู (Shownu) MONSTA X',
            imgSrc: 'images/27.jpg',
            selected: false
          },
          {
            name: 'แบคโฮ (Baekho) วง NU’EST',
            imgSrc: 'images/28.jpg',
            selected: false
          },
          {
            name: 'Jay Park (เจย์พัค)',
            imgSrc: 'images/29.jpg',
            selected: false
          },
          {
            name: 'จินอู Winner',
            imgSrc: 'images/30.jpg',
            selected: false
          },
          {
            name: 'เร็น NU’EST',
            imgSrc: 'images/31.jpg',
            selected: false
          },
          {
            name: 'จองฮัน SEVENTEEN',
            imgSrc: 'images/32.jpg',
            selected: false
          }
        ];
      },
      rndLists(arr) { //배열 랜덤 섞음
        return arr.map((n) => { return [Math.random(), n] }).sort().map((n) => {  return n[1] });//n[1].selected = false;
      },
      selectedLists(arr) {
        return arr.filter((n) => n.selected === true);
      },
      gameNewStart() {
        const v = _O.Vars;
        v.gameHistory[v.curRound.toString()] = this.rndLists(v.lists);
        _O.Html.set.bind(_O.Html)();
      },
      copyObj(obj) { //Deep Copy
        let copy = {};
        for (let attr in obj) {
          if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
          }
        }
        copy.selected = false;
        return copy;
      },
      nextRound() {
        const v = _O.Vars;
        if(v.curRound <= 1) return;
        v.lists = _O.Ctrl.selectedLists(v.gameHistory[v.curRound.toString()]).map((n) => _O.Ctrl.copyObj(n));
        if(v.curRound > 1) v.curRound /= 2;
        v.curStage = 0;
        v.gameHistory[v.curRound.toString()] = this.rndLists(v.lists);
        // console.log('v.lists::',v.lists, 'v.gameHistory::',v.gameHistory);
        _O.Html.setRoundTitle();
      },
      prevCancelOnOff() {
        const footerObj = document.getElementById('footer');
        if(_O.Vars.curRound === _O.Vars.maxRound) {
          if(_O.Vars.curRound > 1 && _O.Vars.curStage > 0) footerObj.className = 'footer';
          else footerObj.className = 'footer soff';
        } else {
          if(_O.Vars.curRound > 1) footerObj.className = 'footer';
          else footerObj.className = 'footer soff';
        }
      }
    };
    _O.Event = {
      clickItem(obj) {
        const v = _O.Vars;
        if(v.curRound === 1) return;
        const idx = obj.id.split('_')[1];
        v.gameHistory[v.curRound.toString()][idx].selected = true;
        if(v.curStage < v.curRound/2) v.curStage++;
        if(v.curStage === v.curRound/2) _O.Ctrl.nextRound();
        _O.Html.setItem();
        _O.Ctrl.prevCancelOnOff();
      },
      overItem(obj) {
        const objs = document.querySelectorAll('#list_ideal li a[hover="true"]');
        objs.forEach((itm) => itm.setAttribute('hover', 'false'));
        if(obj.getAttribute('hover') === 'true') return;
        obj.setAttribute('hover', 'true');
      },
      outItem(obj) {
        if(obj.getAttribute('hover') === 'false') return;
        obj.setAttribute('hover', 'false');
      },
      clickCancel() {
        _O.start();
      },
      clickPrev() {
        const v = _O.Vars;
        if(v.curStage > 0) v.curStage--;
        else {
          v.gameHistory[v.curRound.toString()] = [];
          if(v.curRound < _O.Vars.maxRound) {
            v.curRound *= 2;
            v.curStage = v.curRound / 2 - 1;
          }
          _O.Html.setRoundTitle();
          v.lists = v.gameHistory[v.curRound.toString()];
        }

        v.lists[v.curStage * 2].selected = false;
        v.lists[v.curStage * 2 + 1].selected = false;
        _O.Html.setItem();
        _O.Ctrl.prevCancelOnOff();
      }
    };
    _O.Html = {
      set() {
        this.setRoundTitle();
        this.setContent();
      },
      setHistory() {
        const tObj = document.getElementById('modal');
        let key, roundDiv, imgObj, roundTitleDiv, roundImgWrapDiv;
        let historyTitleDiv = document.createElement('DIV');
        historyTitleDiv.className = 'tit';
        historyTitleDiv.innerText = 'History';
        tObj.appendChild(historyTitleDiv);
        let wrapDiv = document.createElement('DIV');
        wrapDiv.className = 'history_box';
        for(key in _O.Vars.gameHistory) {
          roundDiv = document.createElement('DIV');
          roundDiv.className = 'round';
          roundTitleDiv = document.createElement('h5');
          roundTitleDiv.innerText = (key === '1' ? `สเป็คสุดท้าย` : `${key}คน`);
          roundDiv.appendChild(roundTitleDiv);
          roundImgWrapDiv = document.createElement('DIV');
          _O.Vars.gameHistory[key].forEach((itm) => {
            imgObj = document.createElement('IMG');
            imgObj.setAttribute('src', itm.imgSrc);
            imgObj.className = `history_item ${itm.selected ? '' : (key !== '1' ? 'dim' : '')}`;
            roundImgWrapDiv.appendChild(imgObj);
          });
          roundDiv.appendChild(roundImgWrapDiv);
          wrapDiv.appendChild(roundDiv);
        }
        tObj.appendChild(wrapDiv);
      },
      setRoundTitle() {
        if(_O.Vars.curRound > 1) document.getElementById('roundTitle').innerText = `${_O.Vars.curRound}คน เลือก`;
        else document.getElementById('roundTitle').innerText = `ยินดีด้วย สเป็คสุดท้าย.`;
      },
      setItem() {
        const s = _O.Html.getItem();
        const tObj = document.getElementById('list_ideal');
        if(!tObj) return;
        tObj.innerHTML = s;
        if(_O.Vars.curRound === 1) _O.Html.setHistory();
      },
      getItem() {
        let s = '', i = _O.Vars.curStage * 2, length = i + (_O.Vars.curRound > 1 ? 2 : _O.Vars.curRound);
        for(i; i < length && length <= _O.Vars.curRound; i++) {
          s += `
          <li>
            <a class="item ${_O.Vars.curRound === 1 ? 'final' : ''}" id="item_${i}" hover="false" href="javascript:void(0);" onclick="lezhin.Event.clickItem(this);" onmouseover="lezhin.Event.overItem(this);" onmouseout="lezhin.Event.outItem(this);">
              <span class="thumb"><img src="${_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['imgSrc']}" alt="อันดับนักร้องชายเกาหลี"></span>
              <strong> ${_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['name']}</strong>
            </a>
          </li>
          `;
          if(_O.Vars.curRound === 1) {
            s += `
            <li id="history">
              <a class="modal final" id="modal" href="javascript:void(0);"></a>
            </li>
            `;
          }
        }
        return s;
      },
      setContent() {
        const tObj = document.getElementById('content');
        tObj.className = 'content in_game';
        let s = `
          <ul class="list_ideal" id="list_ideal">
          ${this.getItem()}
          </ul>
        `;
        tObj.innerHTML = s;
      }
    }
	}) (lezhin);
}