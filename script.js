const hiraganaQueNaoConheco = [
	// N
	{ romaji: 'nu', symbol: 'ぬ' },
	// H
	{ romaji: 'hi', symbol: 'ひ' },
	{ romaji: 'he', symbol: 'へ' },
	{ romaji: 'ho', symbol: 'ほ' },
	// M
	{ romaji: 'mu', symbol: 'む' },
	{ romaji: 'me', symbol: 'め' },
	// Y
	{ romaji: 'ya', symbol: 'や' },
	{ romaji: 'yo', symbol: 'よ' },
	// R
	{ romaji: 'ru', symbol: 'る' },
	{ romaji: 're', symbol: 'れ' },
	{ romaji: 'ro', symbol: 'ろ' },
	// W
	{ romaji: 'wo', symbol: 'を' },
	// P
	{ romaji: 'pa', symbol: 'ぱ' },
	{ romaji: 'pi', symbol: 'ぴ' },
	{ romaji: 'pu', symbol: 'ぷ' },
	{ romaji: 'pe', symbol: 'ぺ' },
	{ romaji: 'po', symbol: 'ぽ' },
	// G
	{ romaji: 'ge', symbol: 'げ' },
	// B
	{ romaji: 'ba', symbol: 'ば' },
	{ romaji: 'bi', symbol: 'び' },
	{ romaji: 'bu', symbol: 'ぶ' },
	{ romaji: 'be', symbol: 'べ' },
	{ romaji: 'bo', symbol: 'ぼ' },
	// Z
	{ romaji: 'za', symbol: 'ざ' },
	{ romaji: 'zi', symbol: 'じ' },
	{ romaji: 'zu', symbol: 'ず' },
	{ romaji: 'ze', symbol: 'ぜ' },
	{ romaji: 'zo', symbol: 'ぞ' },
	// D
	{ romaji: 'di', symbol: 'ぢ' },
	{ romaji: 'du', symbol: 'づ' },
]

const katakana = [
	{ romaji: 'a', symbol: 'ア' },
	{ romaji: 'i', symbol: 'イ' },
	{ romaji: 'u', symbol: 'ウ' },
	{ romaji: 'e', symbol: 'エ' },
	{ romaji: 'o', symbol: 'オ' },
	// K
	{ romaji: 'ka', symbol: 'カ' },
	{ romaji: 'ki', symbol: 'キ' },
	{ romaji: 'ku', symbol: 'ク' },
	{ romaji: 'ke', symbol: 'ケ' },
	{ romaji: 'ko', symbol: 'コ' },
	// S
	{ romaji: 'sa', symbol: 'サ' },
	{ romaji: 'shi', symbol: 'シ' },
	{ romaji: 'su', symbol: 'ス' },
	{ romaji: 'se', symbol: 'セ' },
	{ romaji: 'so', symbol: 'ソ' },
	// T
	{ romaji: 'ta', symbol: 'タ' },
	{ romaji: 'chi', symbol: 'チ' },
	{ romaji: 'tsu', symbol: 'ツ|ッ' },
	{ romaji: 'te', symbol: 'テ' },
	{ romaji: 'to', symbol: 'ト' },
	// N
	{ romaji: 'na', symbol: 'ナ' },
	{ romaji: 'ni', symbol: 'ニ' },
	{ romaji: 'nu', symbol: 'ヌ' },
	{ romaji: 'ne', symbol: 'ネ' },
	{ romaji: 'no', symbol: 'ノ' },
	// H
	{ romaji: 'ha', symbol: 'ハ' },
	{ romaji: 'hi', symbol: 'ヒ' },
	{ romaji: 'fu', symbol: 'フ' },
	{ romaji: 'he', symbol: 'ヘ|へ' },
	{ romaji: 'ho', symbol: 'ホ' },
	// M
	{ romaji: 'ma', symbol: 'マ' },
	{ romaji: 'mi', symbol: 'ミ' },
	{ romaji: 'mu', symbol: 'ム' },
	{ romaji: 'me', symbol: 'メ' },
	{ romaji: 'mo', symbol: 'モ' },
	// Y
	{ romaji: 'ya', symbol: 'ヤ|ャ' },
	{ romaji: 'yu', symbol: 'ユ|ュ' },
	{ romaji: 'yo', symbol: 'ヨ|ョ' },
	// R
	{ romaji: 'ra', symbol: 'ラ' },
	{ romaji: 'ri', symbol: 'リ' },
	{ romaji: 'ru', symbol: 'ル' },
	{ romaji: 're', symbol: 'レ' },
	{ romaji: 'ro', symbol: 'ロ' },
	// W
	{ romaji: 'wa', symbol: 'ワ' },
	{ romaji: 'wo', symbol: 'ヲ' },
	// N
	{ romaji: 'n', symbol: 'ン' },
	// P
	{ romaji: 'pa', symbol: 'パ' },
	{ romaji: 'pi', symbol: 'ピ' },
	{ romaji: 'pu', symbol: 'プ' },
	{ romaji: 'pe', symbol: 'ペ|ぺ' },
	{ romaji: 'po', symbol: 'ポ' },
	// G
	{ romaji: 'ga', symbol: 'ガ' },
	{ romaji: 'gi', symbol: 'ギ' },
	{ romaji: 'gu', symbol: 'グ' },
	{ romaji: 'ge', symbol: 'ゲ' },
	{ romaji: 'go', symbol: 'ゴ' },
	// B
	{ romaji: 'ba', symbol: 'バ' },
	{ romaji: 'bi', symbol: 'ビ' },
	{ romaji: 'bu', symbol: 'ブ' },
	{ romaji: 'be', symbol: 'ベ|べ' },
	{ romaji: 'bo', symbol: 'ボ' },
	// Z
	{ romaji: 'za', symbol: 'ザ' },
	{ romaji: 'zi', symbol: 'ジ' },
	{ romaji: 'zu', symbol: 'ズ' },
	{ romaji: 'ze', symbol: 'ゼ' },
	{ romaji: 'zo', symbol: 'ゾ' },
	// D
	{ romaji: 'da', symbol: 'ダ' },
	{ romaji: 'di', symbol: 'ヂ' },
	{ romaji: 'du', symbol: 'ヅ' },
	{ romaji: 'de', symbol: 'デ' },
	{ romaji: 'do', symbol: 'ド' },
]

const hiraganaQueConheco = [
	{ romaji: 'a', symbol: 'あ' },
	{ romaji: 'i', symbol: 'い' },
	{ romaji: 'u', symbol: 'う' },
	{ romaji: 'e', symbol: 'え' },
	{ romaji: 'o', symbol: 'お' },
	{ romaji: 'ka', symbol: 'か' },
	{ romaji: 'ki', symbol: 'き' },
	{ romaji: 'ku', symbol: 'く' },
	{ romaji: 'ke', symbol: 'け' },
	{ romaji: 'ko', symbol: 'こ' },
	{ romaji: 'sa', symbol: 'さ' },
	{ romaji: 'shi', symbol: 'し' },
	{ romaji: 'su', symbol: 'す' },
	{ romaji: 'se', symbol: 'せ' },
	{ romaji: 'so', symbol: 'そ' },
	{ romaji: 'ta', symbol: 'た' },
	{ romaji: 'no', symbol: 'の' },
	{ romaji: 'chi', symbol: 'ち' },
	{ romaji: 'tsu', symbol: 'つ' },
	{ romaji: 'te', symbol: 'て' },
	{ romaji: 'to', symbol: 'と' },
	{ romaji: 'na', symbol: 'な' },
	{ romaji: 'ne', symbol: 'ね' },
	{ romaji: 'ni', symbol: 'に' },
	{ romaji: 'ha; wa', symbol: 'は' },
	{ romaji: 'ma', symbol: 'ま' },
	{ romaji: 'mi', symbol: 'み' },
	{ romaji: 'mo', symbol: 'も' },
	{ romaji: 'yu', symbol: 'ゆ' },
	{ romaji: 'ra', symbol: 'ら' },
	{ romaji: 'ri', symbol: 'り' },
	{ romaji: 'wa', symbol: 'わ' },
	{ romaji: 'n', symbol: 'ん' },
	{ romaji: 'fu', symbol: 'ふ' },
	{ romaji: 'ga', symbol: 'が' },
	{ romaji: 'gi', symbol: 'ぎ' },
	{ romaji: 'gu', symbol: 'ぐ' },
	{ romaji: 'go', symbol: 'ご' },
	{ romaji: 'da', symbol: 'だ' },
	{ romaji: 'de', symbol: 'で' },
	{ romaji: 'do', symbol: 'ど' },
]

const index = Math.floor(Math.random() * hiraganaQueConheco.length)

document.querySelector('#hiragana').innerHTML = hiraganaQueConheco[index].symbol
document.querySelector('#romaji').innerHTML = hiraganaQueConheco[index].romaji

const intervalo = 10 * 60 * 1000

setInterval(location.reload(), intervalo)