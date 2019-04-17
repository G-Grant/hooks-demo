import React, { PureComponent } from 'react';

export default class LeftContainer extends PureComponent{

    constructor(props){
        super(props);
        this.onScroll = this.onScroll.bind(this);
    }

    onScroll(e){
        this.props.onScroll(e);
    }

    componentDidUpdate(){
        let { scrollTop } = this.props;
        if(scrollTop !== this.leftContainer.scrollTop){
            this.leftContainer.scrollTop = scrollTop;
        }
    }

    render(){
        return(
            <div onScroll={this.onScroll}  ref={node=>this.leftContainer=node}>
                近年来，加班费、提成工资等案件纠纷迅速增长，尤其同传统的欠薪纠纷相比，与休假相关的劳动纠纷已成为劳动者主要诉争类型

                从业过劳不仅仅是法律现象，更是社会和经济现象，是企业压力传导至员工的一种体现

                近日，一则由互联网程序员引发的新闻登上热搜——一名程序员在GitHub社区上建立了一个“996.icu”(即工作996，生病ICU)项目，披露部分互联网公司“996”工作制现象，引起了不少“996工作者”的共鸣。

                所谓“996工作制”是指员工每天早9点到岗，一直工作到晚上9点，每周工作6天。这样算下来，“996工作制”的周工作时间最低也达到了72小时。

                北京致诚农民工法律援助与研究中心执行主任时福茂在接受经济日报记者采访时表示，目前我国劳动法规定的工时制度有三种，即标准工时制、综合工时制和不定时工时制。

                根据《中华人民共和国劳动法》，国家实行劳动者每日工作时间不超过8小时、平均每周工作时间不超过44小时的工时制度。有些岗位是以周、月、季、年等为周期综合计算工作时间，但其平均工作时间和平均周工作时间应与法定标准工作时间基本相同。

                在时福茂看来，“996工作制”属于标准工时制，其工作时长明显违反了劳动法。

                “按照相关法律规定，因特殊原因需要延长工作时间的，在保障劳动者身体健康的条件下，延长工作时间每日不得超过3小时，每月不得超过36小时。如果按每天去掉2个小时午休，员工工作时长达到10个小时，一周高达60个小时。按每月4周计算，加班时间也远远超过了国家规定的上限。”时福茂说。

                一位在某互联网公司工作的从业者告诉记者，除了“996”，像“9106”“8106”等上班模式也并不鲜见。虽然公司名义上并没有把工作时间的长短列入相关管理考核制度，但实际上加班已成为许多职场人的常态。

                时福茂表示，世界上各国劳动法对工作时间都有明确规定，其目的就是为了保护劳动者的合法权益。但相关数据显示，近年来加班费、提成工资等案件纠纷迅速增长，尤其同传统的欠薪纠纷相比，与休假相关的劳动纠纷已成为劳动者主要诉争类型。

                全国总工会开展的第八次全国职工队伍状况调查显示，迫使职工超时加班现象较为普遍，每周工作超过48小时的职工占21.6%，仅有44%的职工表示加班加点按劳动法规定足额拿到了加班费或安排了相当时间倒休。

                记者注意到，在某社交平台上，有人抛出这样一项调查，假如收到两个工作合同，薪水较高的“996”与薪水稍低的朝九晚五，你会选哪个?有近三分之二参与者选择了后者。

                有观点认为，“996工作制”在互联网企业日益盛行，实际上是行业竞争日趋白热化的反映。从企业角度看，随着互联网行业迅速发展，各公司需要保持高效率。潜在延长工作时间，能够节约劳动力成本，增加人力资源个体的产值。

                有关专家认为，从业过劳不仅仅是法律现象，更是社会和经济现象，是企业压力传导至员工的一种体现。从员工角度来看，不少以计件工资为基础的职工更愿意加班，工作时间越长，意味着收入也会相应增加。但对于拼命奋斗的企业和个人，在注重发展的同时也应该认识到，休息权是宪法赋予公民的一项基本权利。

                中国劳动关系学院劳动关系系主任乔健认为，无论如何，都需要坚持维护劳动者的报酬权、休息权，以及职业安全和健康底线。尤其是对新就业形态，要构造和化解新业态劳动者职业伤害风险，完善适应新业态的社会保障政策，切实维护新业态劳动者基本权益。
            </div>
        );
    }
}