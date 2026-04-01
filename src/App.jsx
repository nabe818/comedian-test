import React, { useEffect, useMemo, useState } from "react";

const groupThemes = {
  ボケタイプ: {
    colorFrom: "from-rose-500",
    colorTo: "to-orange-400",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-700",
    softBg: "bg-rose-50",
    softBorder: "border-rose-100",
    progress: "bg-rose-500",
  },
  ツッコミタイプ: {
    colorFrom: "from-sky-500",
    colorTo: "to-indigo-500",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-700",
    softBg: "bg-sky-50",
    softBorder: "border-sky-100",
    progress: "bg-sky-500",
  },
};

const homeQuotes = [
  { text: "面白いってのは、違和感やねん。", author: "松本人志" },
  { text: "笑いは人を救うんじゃない。逃がすんだ。", author: "明石家さんま" },
  { text: "普通のことを普通じゃなく言うのが芸人。", author: "バカリズム" },
  { text: "人と違うことをやれ。それが個性や。", author: "志村けん" },
  { text: "一番おもしろいのは、人間そのもの。", author: "ビートたけし" },
  { text: "ツッコミは優しさやで。", author: "浜田雅功" },
  { text: "考えすぎると面白くなくなる。", author: "出川哲朗" },
  { text: "笑いはタイミング。", author: "明石家さんま" },
  { text: "自分にしかできないことをやるしかない。", author: "内村光良" },
  { text: "人を活かしてこそ、自分も活きる。", author: "内村光良" },
];

const typeQuotes = {
  BCWL: [
    { text: "面白いってのは、違和感やねん。", author: "松本人志" },
    { text: "普通のことを普通じゃなく言うのが芸人。", author: "バカリズム" },
  ],
  BCWA: [
    { text: "人と違うことをやれ。それが個性や。", author: "志村けん" },
    { text: "一番おもしろいのは、人間そのもの。", author: "ビートたけし" },
  ],
  BCPL: [
    { text: "面白いってのは、違和感やねん。", author: "松本人志" },
    { text: "普通のことを普通じゃなく言うのが芸人。", author: "バカリズム" },
  ],
  BCPA: [
    { text: "考えすぎると面白くなくなる。", author: "出川哲朗" },
    { text: "笑いはタイミング。", author: "明石家さんま" },
  ],
  BMWL: [
    { text: "笑いはタイミング。", author: "明石家さんま" },
    { text: "面白いってのは、違和感やねん。", author: "松本人志" },
  ],
  BMWA: [
    { text: "一番おもしろいのは、人間そのもの。", author: "ビートたけし" },
    { text: "人と違うことをやれ。それが個性や。", author: "志村けん" },
  ],
  BMPL: [
    { text: "普通のことを普通じゃなく言うのが芸人。", author: "バカリズム" },
    { text: "面白いってのは、違和感やねん。", author: "松本人志" },
  ],
  BMPA: [
    { text: "考えすぎると面白くなくなる。", author: "出川哲朗" },
    { text: "一番おもしろいのは、人間そのもの。", author: "ビートたけし" },
  ],
  TCWL: [
    { text: "ツッコミは優しさやで。", author: "浜田雅功" },
    { text: "人を活かしてこそ、自分も活きる。", author: "内村光良" },
  ],
  TCWA: [
    { text: "ツッコミは優しさやで。", author: "浜田雅功" },
    { text: "人を活かしてこそ、自分も活きる。", author: "内村光良" },
  ],
  TCPL: [
    { text: "ツッコミは優しさやで。", author: "浜田雅功" },
    { text: "笑いはタイミング。", author: "明石家さんま" },
  ],
  TCPA: [
    { text: "ツッコミは優しさやで。", author: "浜田雅功" },
    { text: "考えすぎると面白くなくなる。", author: "出川哲朗" },
  ],
  TMWL: [
    { text: "笑いはタイミング。", author: "明石家さんま" },
    { text: "ツッコミは優しさやで。", author: "浜田雅功" },
  ],
  TMWA: [
    { text: "人を活かしてこそ、自分も活きる。", author: "内村光良" },
    { text: "ツッコミは優しさやで。", author: "浜田雅功" },
  ],
  TMPL: [
    { text: "自分にしかできないことをやるしかない。", author: "内村光良" },
    { text: "一番おもしろいのは、人間そのもの。", author: "ビートたけし" },
  ],
  TMPA: [
    { text: "考えすぎると面白くなくなる。", author: "出川哲朗" },
    { text: "ツッコミは優しさやで。", author: "浜田雅功" },
  ],
};

const results = {
  BCWL: {
    code: "BCWL",
    typeName: "構築型ワードボケ",
    group: "ボケタイプ",
    tagline: "ちゃんと考えてからふざけるタイプ",
    core: "言葉選びや流れを組み立てて、設計で笑いを取るタイプ。",
    quirks: ["変な一言も割と計算済み", "流れを見てボケる", "あとで回収したくなる"],
    strengths: ["構成力が高い", "言語化が強い", "大喜利向き"],
    weaknesses: ["ノリが弱く見られやすい", "考えすぎて遅れる", "勢い勝負に弱い"],
    mistakes: ["完成度を求めすぎる", "説明したくなる", "雑な場にイラつく"],
    tips: ["7割で出す", "勢い型と組む", "正しさより面白さを優先する"],
    compatibility: ["TCPL", "TCPA"],
    badCompatibility: ["TCWL", "BCWL"],
    growth: "勢いを少し足すと一気に跳ねる。",
    comediansRecent: ["粗品", "バカリズム", "川北茂澄"],
    comediansLegend: ["松本人志"],
  },

  BCWA: {
    code: "BCWA",
    typeName: "ズレ系ワードボケ",
    group: "ボケタイプ",
    tagline: "ズレてるのに本人は普通だと思ってるタイプ",
    core: "独特な感覚と言葉のズレで刺す、センス一点突破型。",
    quirks: ["本人は真面目", "妙なたとえを出す", "一部に異常に刺さる"],
    strengths: ["独自性が強い", "被りにくい", "ハマると爆発力が高い"],
    weaknesses: ["伝わらない時は本当に伝わらない", "説明すると弱い", "空気に左右される"],
    mistakes: ["伝わってないのに押す", "諦めが早い", "身内ノリに寄る"],
    tips: ["短く出す", "拾ってくれる相手を大事にする", "ズレを言い切る"],
    compatibility: ["TCWA", "TMWL"],
    badCompatibility: ["TCPL", "BCWA"],
    growth: "通訳役がいると急に天才扱いされる。",
    comediansRecent: ["川北茂澄", "楢原真樹", "せいや"],
    comediansLegend: ["又吉直樹"],
  },

  BCPL: {
    code: "BCPL",
    typeName: "理詰めパワーボケ",
    group: "ボケタイプ",
    tagline: "理屈でボケる一番めんどいタイプ",
    core: "正しそうに見せながら変な場所に着地させる、論理皮かぶり型。",
    quirks: ["理屈っぽく変なことを言う", "妙に説得力がある", "ツッコミを混乱させる"],
    strengths: ["押し切る力がある", "論理っぽさを使える", "変化球を成立させやすい"],
    weaknesses: ["くどくなりやすい", "説明が長い", "わかりやすい笑いに負ける"],
    mistakes: ["理屈を伸ばしすぎる", "相手を置いていく", "賢く見せようとする"],
    tips: ["結論を先に言う", "短く言い切る", "勢い型の反応を借りる"],
    compatibility: ["TCPL", "TCPA"],
    badCompatibility: ["TMWA", "BCPL"],
    growth: "理屈を削るほど面白さだけが残る。",
    comediansRecent: ["粗品", "高比良くるま", "友田オレ"],
    comediansLegend: ["石橋貴明"],
  },

  BCPA: {
    code: "BCPA",
    typeName: "暴走パワーボケ",
    group: "ボケタイプ",
    tagline: "勢いで全部持っていくタイプ",
    core: "細かさより熱量で笑いを作る、空気ごと持っていくタイプ。",
    quirks: ["強めに出る", "体ごとボケる", "止まるのが嫌い"],
    strengths: ["場を温める", "初速が速い", "失敗も笑いに変える"],
    weaknesses: ["静かな場に弱い", "雑に見られやすい", "繊細な笑いと噛み合いにくい"],
    mistakes: ["強さだけで押す", "人の話を食う", "回収を捨てる"],
    tips: ["静かな技を1つ持つ", "要所で引く", "冷静ツッコミを味方にする"],
    compatibility: ["TCPA", "TMPL"],
    badCompatibility: ["BCPA", "TMWA"],
    growth: "抑える場所を覚えると暴走が武器になる。",
    comediansRecent: ["せいや", "崎山祐", "堂前透"],
    comediansLegend: ["志村けん"],
  },

  BMWL: {
    code: "BMWL",
    typeName: "即興ワードボケ",
    group: "ボケタイプ",
    tagline: "その場で急に面白くなるタイプ",
    core: "会話の流れの中で、最適なひと言を差し込む反応型。",
    quirks: ["アドリブに強い", "本番に強い", "会話で急に覚醒する"],
    strengths: ["瞬発力が高い", "切り返しが速い", "生っぽい笑いに強い"],
    weaknesses: ["再現性が安定しない", "準備で鈍る", "相手に左右される"],
    mistakes: ["準備を軽視する", "その場しのぎで終える", "拾われ前提で動く"],
    tips: ["刺さった型をメモする", "言い換えを増やす", "設計も少し持つ"],
    compatibility: ["TMWL", "TCWL"],
    badCompatibility: ["TMPL", "BMWL"],
    growth: "即興に構造が乗るとかなり強い。",
    comediansRecent: ["川北茂澄", "粗品", "楢原真樹"],
    comediansLegend: ["明石家さんま"],
  },

  BMWA: {
    code: "BMWA",
    typeName: "天然ワードボケ",
    group: "ボケタイプ",
    tagline: "狙ってないのに一番ズルいタイプ",
    core: "本人は普通のつもりでも、ズレがそのまま笑いになる天然型。",
    quirks: ["普通に言ったつもりで笑われる", "ズレの自覚が薄い", "周りが勝手にツッコむ"],
    strengths: ["作為がなく強い", "親しみやすい", "空気を和らげやすい"],
    weaknesses: ["再現性が低い", "狙うと弱い", "拾い手がいないと流れる"],
    mistakes: ["天然を演じる", "ズレを恥ずかしがる", "無理に計算する"],
    tips: ["変な発言を消さない", "拾ってくれる相手と組む", "自然体を崩しすぎない"],
    compatibility: ["TCWA", "TMPA"],
    badCompatibility: ["TCPL", "BMWA"],
    growth: "出たものをそのまま活かせると強い。",
    comediansRecent: ["せいや", "堂前透", "佐々木隆史"],
    comediansLegend: ["狩野英孝"],
  },

  BMPL: {
    code: "BMPL",
    typeName: "理屈暴れボケ",
    group: "ボケタイプ",
    tagline: "変な理論で押し切るタイプ",
    core: "独自理論で暴れて、意味不明さそのものを武器にするクセ強型。",
    quirks: ["持論が多い", "妙な説得力で押す", "理屈をボケにする"],
    strengths: ["クセが強い", "一部に深く刺さる", "キャラとして立ちやすい"],
    weaknesses: ["万人受けしにくい", "重いと冷える", "テンポを壊しやすい"],
    mistakes: ["理論を伸ばしすぎる", "伝わらなくても続ける", "理解力のせいにする"],
    tips: ["一番変な部分だけ出す", "切る勇気を持つ", "先に笑いに変える"],
    compatibility: ["TCWL", "TCPA"],
    badCompatibility: ["TMWA", "BMPL"],
    growth: "削るほど変さだけが残る。",
    comediansRecent: ["粗品", "高比良くるま", "堂前透"],
    comediansLegend: ["くっきー！"],
  },

  BMPA: {
    code: "BMPA",
    typeName: "カオス暴走ボケ",
    group: "ボケタイプ",
    tagline: "存在がもうボケなタイプ",
    core: "予測不能な動きと破壊力で、空気のルールごと変えるタイプ。",
    quirks: ["何するかわからない", "急に別世界を始める", "空気を壊す"],
    strengths: ["インパクトが強い", "見た目や動きも武器", "企画で映える"],
    weaknesses: ["制御しないと散る", "会話の細かさに弱い", "当たり外れが大きい"],
    mistakes: ["カオスだけで押す", "引き際がわからない", "相手のターンを消す"],
    tips: ["冷静な相方を置く", "一撃技を持つ", "暴れる量を少し減らす"],
    compatibility: ["TMPL", "TCPA"],
    badCompatibility: ["BMPA", "TCWA"],
    growth: "制御役がいるとちゃんと芸になる。",
    comediansRecent: ["せいや", "崎山祐", "楢原真樹"],
    comediansLegend: ["江頭2:50"],
  },

  TCWL: {
    code: "TCWL",
    typeName: "分析型ワードツッコミ",
    group: "ツッコミタイプ",
    tagline: "一言で全部まとめるタイプ",
    core: "ズレや構造を即座に言葉にして、笑いとして成立させる整理型。",
    quirks: ["状況整理が速い", "適切な表現がすぐ出る", "一言で流れを回収する"],
    strengths: ["言語化能力が高い", "進行もできる", "ボケの価値を上げる"],
    weaknesses: ["冷静すぎて地味に見られる", "熱量勝負に弱い", "優秀すぎて怖い"],
    mistakes: ["正確さに寄りすぎる", "説明っぽくなる", "自分で締めすぎる"],
    tips: ["少し雑に返す", "感情を一段乗せる", "引き算も覚える"],
    compatibility: ["BCWL", "BMWL"],
    badCompatibility: ["TCWL", "BCPA"],
    growth: "温度が少し上がると華が出る。",
    comediansRecent: ["ガク", "川島明", "町田和樹"],
    comediansLegend: ["上田晋也"],
  },

  TCWA: {
    code: "TCWA",
    typeName: "共感ワードツッコミ",
    group: "ツッコミタイプ",
    tagline: "優しく拾うけどちゃんと刺すタイプ",
    core: "きつすぎず的確に拾って、見ている側の気持ちを代弁するタイプ。",
    quirks: ["わかりやすく言い換える", "空気を壊さず拾う", "変さを優しく見せる"],
    strengths: ["親しみやすい", "誰とでも組みやすい", "視聴者目線が強い"],
    weaknesses: ["尖りが弱く見える", "強いボケに押される", "優しすぎる時がある"],
    mistakes: ["丸くまとめすぎる", "遠慮して深く刺さない", "許しすぎる"],
    tips: ["一発だけ強めの返しを持つ", "遠慮しすぎない", "自分の色も出す"],
    compatibility: ["BCWA", "BMWA"],
    badCompatibility: ["BCPL", "TCPA"],
    growth: "一段強い返しが入るとかなり強い。",
    comediansRecent: ["松井ケムリ", "ノブ", "出井隼之介"],
    comediansLegend: ["内村光良"],
  },

  TCPL: {
    code: "TCPL",
    typeName: "論破ツッコミ",
    group: "ツッコミタイプ",
    tagline: "正論で殴るタイプ",
    core: "ズレや矛盾を論理で一気に切る、強さが武器の王道型。",
    quirks: ["矛盾を見つけるのが速い", "言い切りが強い", "圧で制御する"],
    strengths: ["安定感が高い", "場を締められる", "王道漫才に強い"],
    weaknesses: ["怖く見られやすい", "柔らかいボケを潰しやすい", "圧が強すぎる時がある"],
    mistakes: ["正しすぎて笑いを飛ばす", "詰めすぎる", "相方を追い込む"],
    tips: ["一拍ゆるめる", "共感で拾う手も持つ", "圧の強弱をつける"],
    compatibility: ["BCWL", "BCPL"],
    badCompatibility: ["BCWA", "TCPL"],
    growth: "余白ができると怖さが魅力になる。",
    comediansRecent: ["川島明", "ノブ", "町田和樹"],
    comediansLegend: ["浜田雅功"],
  },

  TCPA: {
    code: "TCPA",
    typeName: "ブチギレツッコミ",
    group: "ツッコミタイプ",
    tagline: "感情で全部持っていくタイプ",
    core: "温度そのものを武器にして、勢いで場を締める感情爆発型。",
    quirks: ["リアクションが大きい", "感情の乗りが速い", "温度で持っていく"],
    strengths: ["場を温める", "わかりやすい", "勢いボケと相性がいい"],
    weaknesses: ["疲れやすい", "繊細な場に弱い", "前に出すぎることがある"],
    mistakes: ["毎回フルパワー", "怒って見せすぎる", "相方を食う"],
    tips: ["静かな返しも持つ", "抑える場面を決める", "立てる回も作る"],
    compatibility: ["BCPA", "BMPA"],
    badCompatibility: ["TCWL", "TCPA"],
    growth: "強弱がつくとさらに武器になる。",
    comediansRecent: ["こてつ", "澤部佑", "兎"],
    comediansLegend: ["浜田雅功"],
  },

  TMWL: {
    code: "TMWL",
    typeName: "即興ツッコミ",
    group: "ツッコミタイプ",
    tagline: "反応速度で勝つタイプ",
    core: "瞬間的にズレを見つけて短く返す、生の会話に強い反射型。",
    quirks: ["返しが速い", "テンポを保つのがうまい", "生で光る"],
    strengths: ["瞬発力が高い", "ひな壇や配信に強い", "対応範囲が広い"],
    weaknesses: ["考える時間があると勢いが落ちる", "設計には弱い", "雑に流す時がある"],
    mistakes: ["勢いだけで返す", "良い返しを再利用しない", "準備を軽視する"],
    tips: ["言い回しの型を増やす", "拾いきれなかった場面を見返す", "深い返しも混ぜる"],
    compatibility: ["BMWL", "BCWA"],
    badCompatibility: ["TMPL", "TMWL"],
    growth: "質が乗るとかなり無双する。",
    comediansRecent: ["粗品", "出井隼之介", "ガク"],
    comediansLegend: ["明石家さんま"],
  },

  TMWA: {
    code: "TMWA",
    typeName: "優しめ共感ツッコミ",
    group: "ツッコミタイプ",
    tagline: "空気壊さず成立させるタイプ",
    core: "相手を潰さず空気を守って、丸く笑いに変える安定型。",
    quirks: ["きつく言いすぎない", "人の良さを消さない", "流れを柔らかく整える"],
    strengths: ["安心感がある", "誰とでも組みやすい", "場を丸く保てる"],
    weaknesses: ["爆発力が弱く見える", "強いボケを抑えきれない", "印象が薄くなることがある"],
    mistakes: ["遠慮して薄くなる", "全部優しく処理する", "鋭さを引っ込める"],
    tips: ["強い武器を1つ持つ", "言葉を少し太くする", "強く出る練習をする"],
    compatibility: ["BMWA", "BCWA"],
    badCompatibility: ["BCPA", "TCPL"],
    growth: "優しさに少し刃が入ると印象が残る。",
    comediansRecent: ["松井ケムリ", "兎", "ノブ"],
    comediansLegend: ["所ジョージ"],
  },

  TMPL: {
    code: "TMPL",
    typeName: "冷静ツッコミ",
    group: "ツッコミタイプ",
    tagline: "静かに一番刺すタイプ",
    core: "熱くならずにズレを切る、低温なのに強い大人型。",
    quirks: ["テンションは高くない", "一言の圧が強い", "静かなのに流れを変える"],
    strengths: ["温度差が武器", "暴走系の制御がうまい", "知的に見える"],
    weaknesses: ["派手さが出にくい", "即興勝負で置かれることがある", "地味に見られやすい"],
    mistakes: ["冷たく見せすぎる", "淡々としすぎる", "上げる場面でも上げない"],
    tips: ["たまに感情を乗せる", "笑顔や間で柔らかさを出す", "テンポ戦も少し持つ"],
    compatibility: ["BCPA", "BMPA"],
    badCompatibility: ["BMWL", "TMPL"],
    growth: "低温のまま少し華が出るとかなり強い。",
    comediansRecent: ["川島明", "兎", "赤木細マッチョ"],
    comediansLegend: ["タモリ"],
  },

  TMPA: {
    code: "TMPA",
    typeName: "リアクションツッコミ",
    group: "ツッコミタイプ",
    tagline: "リアクションで笑わせるタイプ",
    core: "言葉だけでなく、表情や身体の反応そのものが笑いになる身体派。",
    quirks: ["リアクションが豊か", "顔に全部出る", "体ごと返す"],
    strengths: ["映像で強い", "わかりやすい", "天然やカオスを面白く見せやすい"],
    weaknesses: ["言語戦に弱い", "会話だけだと埋もれる", "毎回大きく返しすぎる"],
    mistakes: ["リアクションだけで済ませる", "言葉を磨かない", "似た反応ばかりになる"],
    tips: ["短い定番ワードを作る", "表情以外の返しも増やす", "温度差を増やす"],
    compatibility: ["BMWA", "BMPA"],
    badCompatibility: ["BCWL", "TMPA"],
    growth: "言葉が少し強くなると完成度が上がる。",
    comediansRecent: ["こてつ", "出井隼之介", "澤部佑"],
    comediansLegend: ["出川哲朗"],
  },
};

const questions = [
  { id: 1, text: "会話が一瞬止まったとき、つい自分から何か足したくなる。", axis: "role", reverse: false },
  { id: 2, text: "人がちょっとズレたことを言うと、正すより広げたくなる。", axis: "role", reverse: false },
  { id: 3, text: "笑いが起きた後、さらにもう一段ボケを重ねたくなる。", axis: "role", reverse: false },
  { id: 4, text: "自分で変なことを言うより、人の変さを指摘する方が自然だ。", axis: "role", reverse: true },
  { id: 5, text: "『今の何？』みたいな一言を入れたくなることが多い。", axis: "role", reverse: true },
  { id: 6, text: "自分が前に出るより、誰かの発言を処理して整える方が得意だ。", axis: "role", reverse: true },
  { id: 7, text: "面白いと思うのは、会話のキレより設定の妙だったりする。", axis: "style", reverse: false },
  { id: 8, text: "ふざける時、役やキャラみたいなものが自然と乗る。", axis: "style", reverse: false },
  { id: 9, text: "普通の会話の中で崩すより、ちょっとした世界観ごっこが好きだ。", axis: "style", reverse: false },
  { id: 10, text: "面白さは設定よりテンポや掛け合いだと思う。", axis: "style", reverse: true },
  { id: 11, text: "キャラを作るより、その場の会話だけで勝負したい。", axis: "style", reverse: true },
  { id: 12, text: "世界観より、返しの速さや応酬の気持ちよさに惹かれる。", axis: "style", reverse: true },
  { id: 13, text: "笑わせる時、言い回しをちょっと考えてしまう。", axis: "power", reverse: false },
  { id: 14, text: "あとから『言い方よかったな』で自分の発言を思い出すことがある。", axis: "power", reverse: false },
  { id: 15, text: "大声や派手さより、言葉の妙で笑いを取りたい。", axis: "power", reverse: false },
  { id: 16, text: "細かい言い回しより、とりあえず強く出た方が勝ちだと思う。", axis: "power", reverse: true },
  { id: 17, text: "一撃でドカンといく笑いの方が好きだ。", axis: "power", reverse: true },
  { id: 18, text: "面白いかどうかは、結局テンションと勢いで決まる部分が大きい。", axis: "power", reverse: true },
  { id: 19, text: "面白いことを言う時、無意識に流れや構造を見ている。", axis: "logic", reverse: false },
  { id: 20, text: "ボケやツッコミを見て『うまい構造だな』と思うことがある。", axis: "logic", reverse: false },
  { id: 21, text: "ノリだけじゃなく、どう繋がるかを結構気にする。", axis: "logic", reverse: false },
  { id: 22, text: "理屈ではなく、なんか面白いで動くことが多い。", axis: "logic", reverse: true },
  { id: 23, text: "構造より、その場の空気感の方を大事にしている。", axis: "logic", reverse: true },
  { id: 24, text: "うまく説明できないけど、感覚で『これいける』と思うことが多い。", axis: "logic", reverse: true },
];

const options = [
  { label: "かなり当てはまる", value: 2 },
  { label: "やや当てはまる", value: 1 },
  { label: "あまり当てはまらない", value: -1 },
  { label: "ほぼ当てはまらない", value: -2 },
];

function getTypeKey(scores) {
  const role = scores.role >= 0 ? "B" : "T";
  const style = scores.style >= 0 ? "C" : "M";
  const power = scores.power >= 0 ? "W" : "P";
  const logic = scores.logic >= 0 ? "L" : "A";
  return `${role}${style}${power}${logic}`;
}

function getGroupName(scores) {
  return scores.role >= 0 ? "ボケタイプ" : "ツッコミタイプ";
}

const galleryOrder = [
  "BCWL", "BCWA", "BCPL", "BCPA",
  "BMWL", "BMWA", "BMPL", "BMPA",
  "TCWL", "TCWA", "TCPL", "TCPA",
  "TMWL", "TMWA", "TMPL", "TMPA",
];

const orderedGallery = galleryOrder.map((code) => results[code]).filter(Boolean);

export default function App() {
  const [screen, setScreen] = useState("home");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ role: 0, style: 0, power: 0, logic: 0 });
  const [selectedTypeKey, setSelectedTypeKey] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [modalCode, setModalCode] = useState(null);

  const progress = useMemo(() => Math.round((currentQuestion / questions.length) * 100), [currentQuestion]);
  const currentTypeKey = selectedTypeKey ?? "BCWL";
  const result = results[currentTypeKey] ?? results.BCWL;
  const theme = groupThemes[result.group];
  const modalType = modalCode ? results[modalCode] : null;
  const modalTheme = modalType ? groupThemes[modalType.group] : null;

  const handleAnswer = (value) => {
    const q = questions[currentQuestion];
    const adjusted = q.reverse ? -value : value;
    const nextScores = { ...scores, [q.axis]: scores[q.axis] + adjusted };

    if (currentQuestion < questions.length - 1) {
      setScores(nextScores);
      setCurrentQuestion((prev) => prev + 1);
      return;
    }

    setScores(nextScores);
    setSelectedTypeKey(getTypeKey(nextScores));
    setScreen("loading");
    setTimeout(() => setScreen("result"), 900);
  };

  const handleStart = () => {
    setScreen("question");
    setCurrentQuestion(0);
    setScores({ role: 0, style: 0, power: 0, logic: 0 });
    setSelectedTypeKey(null);
  };

  const handleRetry = () => {
    setScreen("home");
    setCurrentQuestion(0);
    setScores({ role: 0, style: 0, power: 0, logic: 0 });
    setSelectedTypeKey(null);
  };

  return (
    <>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 flex justify-center">
        <div className="w-full max-w-5xl px-4 sm:px-6">
          {screen !== "home" && (
            <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/90 backdrop-blur">
              <div className="mx-auto max-w-5xl px-1 py-4 sm:px-2">
                <div className="text-xs font-semibold tracking-[0.2em] text-neutral-500">COMEDIAN TYPE TEST</div>
                <div className="mt-1 text-lg font-extrabold">お笑い芸人16タイプ診断</div>
              </div>
            </header>
          )}

          <main className="pb-8 pt-4">
            {screen === "home" && (
              <HomeScreen
                onStart={handleStart}
                showGallery={showGallery}
                onToggleGallery={() => setShowGallery((prev) => !prev)}
                onOpenType={(code) => setModalCode(code)}
              />
            )}
            {screen === "question" && (
              <QuestionScreen
                question={questions[currentQuestion]}
                progress={progress}
                theme={groupThemes[getGroupName(scores)]}
                onAnswer={handleAnswer}
              />
            )}
            {screen === "loading" && <LoadingScreen theme={theme} />}
            {screen === "result" && (
              <ResultScreen
                result={result}
                theme={theme}
                onRetry={handleRetry}
                onOpenType={(code) => setModalCode(code)}
              />
            )}
          </main>
        </div>
      </div>

      {modalType && modalTheme && (
        <TypeModal type={modalType} theme={modalTheme} onClose={() => setModalCode(null)} />
      )}
    </>
  );
}

function HomeScreen({ onStart, showGallery, onToggleGallery, onOpenType }) {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % homeQuotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-6 sm:pt-10">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-neutral-500">
              COMEDIAN TYPE TEST
            </div>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-neutral-900 sm:text-6xl">
              あなたは
              <br />
              どの芸人タイプ？
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
              なんとなく選ぶだけで、笑いの取り方の癖が見えてくる診断。ボケかツッコミか、
              コント寄りか漫才寄りか、言葉か勢いか、論理か感覚かを16タイプで整理します。
            </p>

            <div className="mt-6 rounded-[26px] border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-5">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500">芸人のことば</div>
              <div className="mt-3 min-h-[70px] text-base leading-8 text-neutral-800 sm:text-lg">
                「{homeQuotes[quoteIndex].text}」
              </div>
              <div className="mt-2 text-xs font-bold tracking-[0.12em] text-neutral-500">— {homeQuotes[quoteIndex].author}</div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={onStart} className="rounded-[22px] bg-neutral-900 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:translate-y-[-1px]">
                診断をはじめる
              </button>
              <button onClick={onToggleGallery} className="rounded-[22px] border border-neutral-300 bg-white px-6 py-4 text-base font-bold text-neutral-900 transition hover:bg-neutral-50">
                {showGallery ? "一覧を閉じる" : "16タイプを見る"}
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[28px] bg-gradient-to-br from-rose-500 to-orange-400 p-[1px] shadow-sm">
              <div className="rounded-[27px] bg-white p-5">
                <div className="text-xs font-bold tracking-[0.16em] text-rose-500">BOGE SIDE</div>
                <div className="mt-2 text-2xl font-black text-neutral-900">ボケタイプ</div>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  自分から空気を動かしにいく側。ズラす、広げる、壊す、重ねる、で笑いを作るタイプ。
                </p>
              </div>
            </div>

            <div className="rounded-[28px] bg-gradient-to-br from-sky-500 to-indigo-500 p-[1px] shadow-sm">
              <div className="rounded-[27px] bg-white p-5">
                <div className="text-xs font-bold tracking-[0.16em] text-sky-500">TSUKKOMI SIDE</div>
                <div className="mt-2 text-2xl font-black text-neutral-900">ツッコミタイプ</div>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  人のズレを拾って成立させる側。整理、反応、共感、制御で笑いを締めるタイプ。
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-bold tracking-[0.16em] text-neutral-500">診断でわかること</div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold text-neutral-700">
                <div className="rounded-2xl bg-neutral-50 px-4 py-3">ボケ / ツッコミ</div>
                <div className="rounded-2xl bg-neutral-50 px-4 py-3">コント / 漫才</div>
                <div className="rounded-2xl bg-neutral-50 px-4 py-3">言葉 / 勢い</div>
                <div className="rounded-2xl bg-neutral-50 px-4 py-3">論理 / 感覚</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showGallery && <TypeGallery onOpenType={onOpenType} />}
    </section>
  );
}

function TypeGallery({ onOpenType }) {
  return (
    <section className="mt-6 rounded-[32px] border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">Type Collection</div>
          <div className="mt-1 text-2xl font-black text-neutral-900">16タイプ一覧</div>
        </div>
        <div className="rounded-full bg-neutral-100 px-4 py-2 text-xs font-bold text-neutral-700">気になるタイプをタップ</div>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {orderedGallery.map((type) => (
          <GalleryCard key={type.code} type={type} onOpenType={onOpenType} />
        ))}
      </div>
    </section>
  );
}

function GalleryCard({ type, onOpenType }) {
  return (
    <button
      type="button"
      onClick={() => onOpenType(type.code)}
      className="group rounded-[26px] border border-neutral-200 bg-neutral-50 p-4 text-left transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs font-bold tracking-[0.18em] text-neutral-500">{type.code}</div>
        <div className={`rounded-full px-3 py-1 text-[11px] font-bold ${type.group === "ボケタイプ" ? "bg-rose-100 text-rose-700" : "bg-sky-100 text-sky-700"}`}>
          {type.group}
        </div>
      </div>
      <h3 className="mt-3 text-lg font-black text-neutral-900 group-hover:text-neutral-950">{type.typeName}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-600">{type.tagline}</p>
      <div className="mt-4 space-y-2 text-xs leading-6 text-neutral-500">
        <div className="rounded-2xl bg-white px-3 py-2">最近: {type.comediansRecent.join(" / ")}</div>
        <div className="rounded-2xl bg-white px-3 py-2">殿堂: {type.comediansLegend.join(" / ")}</div>
      </div>
    </button>
  );
}

function QuestionScreen({ question, progress, theme, onAnswer }) {
  return (
    <section className="mx-auto max-w-3xl pt-2">
      <div className="mb-4 flex items-center justify-between gap-3 text-xs font-bold tracking-[0.14em] text-neutral-500">
        <span>QUESTION {question.id} / {questions.length}</span>
        <span>{progress}%</span>
      </div>
      <div className="mb-5 rounded-full bg-neutral-200">
        <div className={`h-2 rounded-full ${theme.progress} transition-all duration-300`} style={{ width: `${Math.max(progress, 8)}%` }} />
      </div>
      <div className="rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
        <div className={`inline-flex rounded-full ${theme.badgeBg} px-3 py-1 text-[11px] font-bold tracking-[0.16em] ${theme.badgeText}`}>
          質問に直感で答える
        </div>
        <h2 className="mt-5 text-2xl font-black leading-10 tracking-tight text-neutral-900 sm:text-4xl">{question.text}</h2>
        <p className="mt-3 text-sm leading-7 text-neutral-500">深く考えずに選んだほうが、診断としては当たりやすいです。</p>
        <div className="mt-8 grid gap-3">
          {options.map((option) => (
            <button
              key={option.label}
              onClick={() => onAnswer(option.value)}
              className={`rounded-[22px] border ${theme.softBorder} ${theme.softBg} px-5 py-4 text-left text-sm font-semibold text-neutral-800 transition hover:scale-[0.995] hover:shadow-sm sm:text-base`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function LoadingScreen({ theme }) {
  return (
    <section className="mx-auto max-w-2xl pt-8">
      <div className={`rounded-[30px] bg-gradient-to-br ${theme.colorFrom} ${theme.colorTo} p-8 text-center text-white shadow-lg`}>
        <div className="mx-auto h-16 w-16 animate-pulse rounded-full bg-white/20" />
        <div className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-white/75">Analyzing</div>
        <div className="mt-2 text-2xl font-black">分析中...</div>
        <p className="mt-3 text-sm leading-7 text-white/90">あなたの笑いの取り方と会話の癖から、お笑いタイプを整理しています。</p>
      </div>
    </section>
  );
}

function ResultScreen({ result, theme, onRetry, onOpenType }) {
  const resultQuote = useMemo(() => {
    const list = typeQuotes[result.code] || [];
    if (list.length === 0) return null;
    return list[Math.floor(Math.random() * list.length)];
  }, [result.code]);

const shareResult = async () => {
  const shareText = `これ当たりすぎてちょっと嫌なんだけど

【${result.typeName}（${result.code}）】
→ ${result.tagline}

近い芸人：
${result.comediansRecent.join(" / ")}

普通に性格バレてる気がする`;

  if (navigator.share) {
    await navigator.share({
      title: "お笑い芸人16タイプ診断",
      text: shareText,
      url: window.location.href,
    });
    return;
  }

  await navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
  alert("シェア文をコピーしました");
};

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
        <section className={`overflow-hidden rounded-[32px] bg-gradient-to-br ${theme.colorFrom} ${theme.colorTo} p-6 text-white shadow-lg`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">Your Result</div>
              <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{result.typeName}</h1>
              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-extrabold tracking-[0.15em] text-white">{result.code}</span>
                <span className={`inline-flex rounded-full ${theme.badgeBg} px-3 py-1 text-xs font-bold ${theme.badgeText}`}>{result.group}</span>
              </div>
            </div>
            <button onClick={shareResult} className="rounded-full bg-white/15 px-3 py-2 text-xs font-semibold backdrop-blur transition hover:bg-white/20">
              シェア
            </button>
          </div>

          <p className="mt-6 text-lg font-semibold leading-8 text-white/95">「{result.tagline}」</p>

          {resultQuote && (
            <div className="mt-5 rounded-[24px] bg-white/12 p-4 backdrop-blur-sm">
              <div className="text-xs font-bold tracking-[0.16em] text-white/70">タイプに合う芸人のことば</div>
              <div className="mt-3 text-base leading-8 text-white/95">「{resultQuote.text}」</div>
              <div className="mt-2 text-xs font-bold tracking-[0.12em] text-white/75">— {resultQuote.author}</div>
            </div>
          )}

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[24px] bg-white/12 p-4 backdrop-blur-sm">
              <div className="text-xs font-bold tracking-[0.16em] text-white/70">最近の近い芸人</div>
              <div className="mt-3 text-sm leading-7 text-white/95">{result.comediansRecent.join(" / ")}</div>
            </div>
            <div className="rounded-[24px] bg-white/12 p-4 backdrop-blur-sm">
              <div className="text-xs font-bold tracking-[0.16em] text-white/70">殿堂入り</div>
              <div className="mt-3 text-sm leading-7 text-white/95">{result.comediansLegend.join(" / ")}</div>
            </div>
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-2">
          <InfoCard title="🧠 本質" items={[result.core]} />
          <InfoCard title="🚀 伸び方" items={[result.growth]} />
          <InfoCard title="🌀 あるある" items={result.quirks} />
          <InfoCard title="🔥 強み" items={result.strengths} />
          <InfoCard title="⚠️ 弱点" items={result.weaknesses} />
          <InfoCard title="💀 やりがち" items={result.mistakes} />
          <InfoCard title="🌱 改善ヒント" items={result.tips} />
          <InfoCard title="🤝 相性がいいタイプ" items={result.compatibility} />
          <InfoCard title="💥 事故りやすいタイプ" items={result.badCompatibility} />
          <InfoCard title="🎤 最近の近い芸人" items={result.comediansRecent} />
          <InfoCard title="🏆 殿堂入り" items={result.comediansLegend} />
        </section>
      </div>
      <section className="mt-6">
        <TypeGallery onOpenType={onOpenType} />
      </section>
      <nav className="sticky bottom-0 mt-4 border-t border-neutral-200 bg-white/95 px-0 py-3 backdrop-blur">
        <div className="grid grid-cols-2 gap-3">
          <button onClick={onRetry} className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-bold text-neutral-900">
            もう一度診断
          </button>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-bold text-white">
            一覧を見る
          </button>
        </div>
      </nav>
    </div>
  );
}

function TypeModal({ type, theme, onClose }) {
  const quoteList = typeQuotes[type.code] || [];
  const modalQuote = quoteList[0] || null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-3 sm:items-center sm:p-6" onClick={onClose}>
      <div className="max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-[28px] bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className={`bg-gradient-to-br ${theme.colorFrom} ${theme.colorTo} p-5 text-white`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">Type Detail</div>
              <h2 className="mt-2 text-3xl font-black">{type.typeName}</h2>
              <div className="mt-2 flex items-center gap-2 flex-wrap">
                <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-extrabold tracking-[0.15em] text-white">{type.code}</span>
                <span className={`inline-flex rounded-full ${theme.badgeBg} px-3 py-1 text-xs font-bold ${theme.badgeText}`}>{type.group}</span>
              </div>
            </div>
            <button onClick={onClose} className="rounded-full bg-white/15 px-3 py-2 text-sm font-bold">閉じる</button>
          </div>
          <p className="mt-5 text-base font-semibold leading-7 text-white/95">「{type.tagline}」</p>
          {modalQuote && (
            <div className="mt-4 rounded-[18px] bg-white/12 p-4 backdrop-blur-sm">
              <div className="text-sm leading-7 text-white/95">「{modalQuote.text}」</div>
              <div className="mt-2 text-xs font-bold tracking-[0.12em] text-white/75">— {modalQuote.author}</div>
            </div>
          )}
        </div>
        <div className="max-h-[56vh] overflow-y-auto p-4 sm:p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <InfoCard title="🧠 本質" items={[type.core]} />
            <InfoCard title="🚀 伸び方" items={[type.growth]} />
            <InfoCard title="🌀 あるある" items={type.quirks} />
            <InfoCard title="🔥 強み" items={type.strengths} />
            <InfoCard title="⚠️ 弱点" items={type.weaknesses} />
            <InfoCard title="💀 やりがち" items={type.mistakes} />
            <InfoCard title="🌱 改善ヒント" items={type.tips} />
            <InfoCard title="🤝 相性がいいタイプ" items={type.compatibility} />
            <InfoCard title="💥 事故りやすいタイプ" items={type.badCompatibility} />
            <InfoCard title="🎤 最近の近い芸人" items={type.comediansRecent} />
            <InfoCard title="🏆 殿堂入り" items={type.comediansLegend} />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, items }) {
  return (
    <section className="rounded-[24px] border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="text-sm font-extrabold">{title}</div>
      <div className="mt-3 space-y-2">
        {items.map((item) => (
          <div key={item} className="rounded-2xl bg-neutral-50 px-3 py-3 text-sm leading-6 text-neutral-700">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
