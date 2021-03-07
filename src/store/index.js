import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cargo: [{
      img:
        "https://cf.shopee.co.th/file/c6cc23245e628765175e055308be5367",
      name: "Nike รุ่น Tanjun",
      price: 1490,
    },
    {
      img:
        "https://d1a2ggqmhsoom.cloudfront.net/8goPoErGxAH5mizjORDOY8wgHkE=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static-catalog.supersports.co.th/p/nike-4338-28267-1.jpg",
      name: "Nike Revolution",
      price: 1200,
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLJt5LiP6euFIA6nQGpwt77Tko-5bRam2xYjH44kCx9EiRUs1cxtwFnnZd9CT-kPkbVsjheKo&usqp=CAc",
      name: "NIKE Court Royale 2 Low รองเท้าลำลองผู้ชาย",
      price: 1900,
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpwg0PKwzvzYEd8Z9kmIpOLi_6vfMUnxpBZ4HTg1k_JP6q2cjLAEWz2troyTXp_0N_YlaeQCF&usqp=CAc",
      name: "NIKE Zoom Winflo 7 รองเท้าวิ่งผู้ชาย",
      price: 2160,
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-EwaTuRZlbMuCdlSzzYdytwjhjJnAQ3oCXufArRJQ2bYwY1jVBP7B908Gb0UfHY5U0cLNw7NeQ&usqp=CAc",
      name: "NIKE Court Royale 2 รองเท้าลำลองผู้หญิง",
      price: 1900,
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1rbRs5MSqD8W5Nx5fpvn3RuK7x2adoFRhLHAZtUsxqZ_hV5pZr6ZC4PFoTlrJv0LDKx0PnL2lw&usqp=CAc",
      name: "NIKE Precision 4 รองเท้าบาสเกตบอลผู้ชาย",
      price: 1590,
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJATzEHWu9quJ6nbri4RxjpPly7AnkCIRG1d-z4PXvBeynEz7PtpMr-UBTuCGhhrj1zFizEnDO&usqp=CAc",
      name: "NIKE Air Max Oketo รองเท้าลำลองผู้ชาย",
      price: 1490,
    },
    {
      img:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ8AnwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAMFBgcIAgH/xABKEAABAwMBBAUHCAYGCwAAAAABAAIDBAURBgcSITETQVFhcRUiMoGRodEUIzNCVZOUwYKSorGy8AhSVGNy4Rc0REVTYoOzwtLT/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAAAIREB/9oADAMBAAIRAxEAPwDeKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIvL3tjY573BrGjLnE4AHasYi2h6TlqhTMvMO+SAHFjwwnueRu+9BlKLxHIyVu9G9r29rTkL2gIiICIiAiIgIiICIiArLq/UlLpWySXWthmmiY9jNyHG8S44HMgK9LX23SPf0DK/P0dVC7xy7d/8kGSaU1baNVUrprVOS9gHSwSDdkjzyyOzvGQr6uRdMX2t05eYLhQPxLEfRJ82Rv1mO7iPyPMLqqw3elv1opbnQP3oKhm8M82nkWnvByD3hBcERQb1dqGx22a4XSoZBTRDLnu6z1ADrJ6gEFh2q1bqLZ/eZWAkvibCQD1SPaw+5xXNNO2acsghBfITjDQTx7yOAWUa51tctZVhHn01pY75ilDvS/5n45u9w5DrJxoRkx7jm4GCMDgMIrKtP6pu+nKGSnoroJGuAaw/SRwHI+i63Hu9AHic8Ctu6Z2gW+qqYbVdqqOK5Pe5jDuFrZMPc1vHkCQ3t4nqHDPP1I1tPPHNuh7mOa4b3dyHgq7qkzMjkqI431AjLHOkaHgee53AHhyI4kH1IOskWg9L69r7LJG+suFTcmRU+7LTSSZ3nvdlnE8AAwdXLjz5LaGlddW+/u6KTo6Sd3GNjpciTjgtBIGXA9XWC09fAjLEREBERAREQEREBaq/pBXJtPp6323fAfV1XSOHayNvH9pzFtVc8/0g7ganV1LRA+bSUYP6T3En3BqDA6GlpKqboq2vbRMLfMmMRe3eyMA45DGePcthaTm1lpGBxsEttvVsmJk6JkhfnAALwBgjqBxkLVcbiOR9Sm2+vrLdP8ot9TJTS8CTGeBxyyORx3qq2pW7ZNQszAbXbqOfGfnukcR+id3vWB6i1PXX2qbUXqsmrZGHMceAyKP/AAtHD8+9ZHbtolHcIW0msLXDVM5Gdse9nvcDx4evj2K6nQeldRw/KdOXJ0BdnzGyb7Qe8Hjw7BhRGrZa2V4IB3QfqjkvDKl471mN22X6god51KyGujHIxODH/qngPasRrrfV0D9yuppqd2cDpmFufA9fqRUql6asf0dPBJNJgkNjYXHA4k4C+CbrByDyI/n81cNn0dRNq63spGl7xIS8N6mbpDie7Bx4kK9bUdNtsV7+UUjN2jrCXsA5Mf1t/P2ojGWva0F0bN7fxvYwCez81NirJWRNgw10Ac95a5ucuIbg+osaVZGSOByDhSRMHNIe0EHmCOCKy/S+qrjaK1kjKpwiY8SSdLKd3AOXlxOSctyMdu7jiAtkaT2qUldU1UV/dBRNfLmjewE/NnkJMZAPfy4+3RbCN0Nx5veqzTgcuPd/Pr8ER1nS1MFZAyelmjmheMtkjcHNcO4hVVy1arzdLQ9zrRcamjLjlzY3ndce0tOQfWFnli2w3GlDY79QMrI8fT0xEcnrafNJ9bUG6UWK2baHpe7lrIrnHTzOOBDV/Muz2De4H1ErKWua9ocxwc08QQcgoPqIiAuW9sj3P2kXneOd10QHcOhYulL3UzQ0T2Uj2MqpWlsT3jLWOxwJHXx6lzlc9l2rmVD3F1NXPzxf8pw533mCgwdh7VVBar9NoDV0HB9jqHY/4bmP/hcVFm0lqWnz0un7lw5lkDnfuyqq1khVaSpno5hPRTyQSj68biD/AJr1La7lA0untlfE0cy+neAPaFW07aqq/XiG20LfnpM7znA7sbRzc7HIIM207tUuFFuxXqD5bEOcseGyezkfctlWfUVg1NEfk01PO4jz4pW4ePEHitV1GyzUsWejFDP3R1BBP6zQrRPovVFE7pTZq1rmcQ+DEhHhuElEdCUVDRUW8KOlig3ue43CwfbRJTeQKWKTBqDUAxDrHA5PhjPtWuW6n1bZoxFNcK+mYBgNqYcH2vbkqzXO51t1m+UV9VLVSkY35DyHYAOA9SCGML212FSz25X0Hs7epQSmyYOc8e3t/nxVVsuP35KhNPZw8F7a/dxjgUE/pOWMd2eX89SCXxPioYkA7l9MoyipRkY7gRnKlW2611pc11quNVRgfVgmcxp8Wg4KtJmaOSpPnHHjgIjZ9k2t6ioN1twFNdIuRMgEUh/SaMcu1pW2tHayterKV0lCXxVEQ+eppRh7O/sI7x68HguYbZarveXBtpt1VV5ON6KMlg8Xch6ytpbLtM3fTmsLbJXyRdJWUtT0tPG7fMMY6M+c4cMl27y7OZ6g2Bc7sGajmt1fG6Bz2g0jyfNqGYBO4f6wJOW88ceSmNcd3DahxHVlvUpGoHWutpHUt0pJZoshwxG4Fjhyc1w4tcOojiFr/U92raSqFVY7ploYGuo7hSt6NxH1g9g3gT2K86M6zGcgufJ2AcML12OdgNPNvWtZQbVZKY7lztDQRzkpKgYP6JGfepUO1/TbnkVNPcYiOswsLf41RsJ0Yd6bPOHo5GcryYxxc1mHH0upYQNrOkyf9ZqwR/cf5r4drWlMHE1aSP7kf+yDNy054N96+tLcElpaxvpEhYC/a9pUAYbciD2Qsz/GqbtsWmQ4YhuhA6mxR4P7aajYbmMkZ5waWnkD9YKz1ulbBWPMlVZ6F73fWMDQ8jxAysSG2bTZdl1LciR6JMMeG/tqtHti0sclwuAdzG/TtIHhhyaqfPsy0pKS7ydJGTx8yql/cXFW+bZDp6Xzoam5xcOTZmOH7TCfeq7NrmkHEF8tXkci6nPD2FVP9K+jjgmvnyDwzSv4D2JBa37G7c5vzN5rWZ5dJEx492FEfsWk4lmoh4OoDn/uLJGbVNHvPG5vwf69M/n7FeotW2GW0+VYrnC+AMc5rmu88hucjc9LPA8MZSDX42KT446jjA6yKE//AEUql2K0eM1V/qJs9VPTNZ+9zleJNrGlmyFkb618vZFBxPtOFRk2lxVHGgsde89Tp3sgHr4uPuUgUeyTSsLt6Wa4VhH1ZagMaP1Gg+9Xyh0lpi1FppbDRteDlr5m9M7Pc55cVYGaru9e9omNHQxjP0TDUSY7nOLQPYVcqIWeapgqbjJeLlNC8SRiecNja4HIPRxhrTx7QUF7nnnkmbSUkM1RNugiJjd1jB2udyaPeeOAVfrNahQNdLM5slXKAHvAwGjqa3uHtJ49gEekvVNu7sFBUtBOfNi5ntVyhrOl/wBnqG/4mYQSV5cxjvSY0+IXpFBHdQ0j/SpYD4xhefJtB/Yab7lvwUpEETyXbv7BS/ct+C+eSrd9n0n3LfgpiIIXkm2n/d1J9w34J5Htn2bR/cN+Cmogg+RrX9m0f4dvwXzyLavsyi/Ds+CnoggeRLT9l0X4dnwXzyJaPsuh/Ds+CuCILf5DtH2VQ/h2fBfPIVn+yaD8Mz4K4oggNslpacttdED3U7PgqottAOVDTD/ot+ClIgoNo6Vvo00I8IwqrWMb6LWjwC9IgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//9k=",
      name: "NIKE Revolution 5 EXT รองเท้าวิ่งผู้ชาย",
      price: 1680,
      },
    ],
    select: [],
    Totalprice: 0,
  },
  getters: {
    T: state => {
      return state.Totalprice;
    },
    Menu: state => {
      return state.cargo;
    },
    Order: state => value => {
      state.select.push(value);
    },
    ShowSelect: state => {
      return state.select;
    }
  },
  mutations: {
    //Clearสินค้า
    Clear: state => {
      state.Totalprice = 0;
      state.select = [];
    },
    //รวมราคา
    Submit: state => {
      state.Totalprice = 0;
      for (let i = 0; i < state.select.length; i++) {
        state.Totalprice = state.Totalprice + state.select[i].Total;
      }
    }
  },
  actions: {},
  modules: {}
})
//忍