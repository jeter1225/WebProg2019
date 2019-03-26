全部的東西都很模組化，但模組化的東西不應該在index的地方整合
可以直接在APP做出整合，順便將變數塞入
像是：

class Page extends Component {
  render(){
    return (
      <div>
        <Header name = "Hsiang" />
        <Content para = {para} />
        <Footer />
      </div>
    );
  }
}

這樣一來可以省去很多步驟，且不需要改動export的內容