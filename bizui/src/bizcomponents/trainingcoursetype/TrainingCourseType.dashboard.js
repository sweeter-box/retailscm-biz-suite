

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './TrainingCourseType.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
import ImagePreview from '../../components/ImagePreview';
import GlobalComponents from '../../custcomponents';
import DashboardTool from '../../common/Dashboard.tool'
import appLocaleName from '../../common/Locale.tool'

const {aggregateDataset,calcKey, defaultHideCloseTrans,
  defaultImageListOf,defaultSettingListOf,defaultBuildTransferModal,
  defaultExecuteTrans,defaultHandleTransferSearch,defaultShowTransferModel,
  defaultRenderExtraHeader,
  defaultSubListsOf,
  defaultRenderExtraFooter,renderForTimeLine,renderForNumbers,defaultQuickFunctions
}= DashboardTool





const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker
const { Option } = Select


const imageList =(trainingCourseType)=>{return [
	 ]}

const internalImageListOf = (trainingCourseType) =>defaultImageListOf(trainingCourseType,imageList)

const optionList =(trainingCourseType)=>{return [ 
	]}

const buildTransferModal = defaultBuildTransferModal
const showTransferModel = defaultShowTransferModel
const internalSettingListOf = (trainingCourseType) =>defaultSettingListOf(trainingCourseType, optionList)
const internalLargeTextOf = (trainingCourseType) =>{

	return null
	

}


const internalRenderExtraHeader = defaultRenderExtraHeader

const internalRenderExtraFooter = defaultRenderExtraFooter
const internalSubListsOf = defaultSubListsOf


const internalRenderTitle = (cardsData,targetComponent) =>{
  
  
  const linkComp=cardsData.returnURL?<Link to={cardsData.returnURL}> <FontAwesome name="arrow-left"  /> </Link>:null
  return (<div>{linkComp}{cardsData.cardsName}: {cardsData.displayName}</div>)

}


const internalSummaryOf = (trainingCourseType,targetComponent) =>{
	
	
	const {TrainingCourseTypeService} = GlobalComponents
	const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{trainingCourseType.id}</Description> 
<Description term="代码">{trainingCourseType.code}</Description> 
<Description term="名称">{trainingCourseType.name}</Description> 
<Description term="描述">{trainingCourseType.description}</Description> 
	
        {buildTransferModal(trainingCourseType,targetComponent)}
      </DescriptionList>
	)

}

const internalQuickFunctions = defaultQuickFunctions

class TrainingCourseTypeDashboard extends Component {

 state = {
    transferModalVisiable: false,
    candidateReferenceList: {},
    candidateServiceName:"",
    candidateObjectType:"city",
    targetLocalName:"",
    transferServiceName:"",
    currentValue:"",
    transferTargetParameterName:"",  
    defaultType: 'trainingCourseType'


  }
  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, companyTrainingListMetaInfo, companyTrainingCount } = this.props.trainingCourseType
    if(!this.props.trainingCourseType.class){
      return null
    }
    const returnURL = this.props.returnURL
    
    const cardsData = {cardsName:"培训课程类型",cardsFor: "trainingCourseType",
    	cardsSource: this.props.trainingCourseType,returnURL,displayName,
  		subItems: [
{name: 'companyTrainingList', displayName:'公司培训',type:'companyTraining',count:companyTrainingCount,addFunction: true, role: 'companyTraining', metaInfo: companyTrainingListMetaInfo},
    
      	],
  	};
    
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const settingListOf = this.props.settingListOf || internalSettingListOf
    const imageListOf = this.props.imageListOf || internalImageListOf
    const subListsOf = this.props.subListsOf || internalSubListsOf
    const largeTextOf = this.props.largeTextOf ||internalLargeTextOf
    const summaryOf = this.props.summaryOf || internalSummaryOf
    const renderTitle = this.props.renderTitle || internalRenderTitle
    const renderExtraFooter = this.props.renderExtraFooter || internalRenderExtraFooter
    const quickFunctions = this.props.quickFunctions || internalQuickFunctions
    return (

      <PageHeaderLayout
        title={renderTitle(cardsData,this)}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
        {quickFunctions(cardsData)} 
        {renderExtraHeader(cardsData.cardsSource)}
        {settingListOf(cardsData.cardsSource)}
        {imageListOf(cardsData.cardsSource)}        
        {largeTextOf(cardsData.cardsSource)}
  
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  trainingCourseType: state._trainingCourseType,
  returnURL: state.breadcrumb.returnURL,
  
}))(Form.create()(TrainingCourseTypeDashboard))

