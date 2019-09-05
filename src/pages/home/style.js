import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .binner-img {
    width: 620px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
    display: block;
    height: 100px;
    width: 125px;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    lin-height: 27px;
    font-weight: bold;
    font-size: 18px;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 18px;
    color: #999;
    margin-top: 15px;
    margin-right: 10px;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 278px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

export const WritterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  lin-height: 300px;
  text-align: center;
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
  text-align: center;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 12px;
  cursor: pointer;
`