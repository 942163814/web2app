/*
 * 2016-08-17 
 * 杨小辉(QQ991865986)
 * 列表页面所需参数
 */
var list_data = {

	//****************************基础信息***************************************
	/**
	 * 交通安全负责人
	 */
	menu_aqzrr: {
		base: {
			title: '交通安全负责人', //模块名称
			vwpage: 'P2906', //页面编码
			addapi: '?apiCode=btn_aqzrr:add', //添加接口
			setapi: '?apiCode=btn_aqzrr:set', //修改接口
			getapi: '?apiCode=page_aqzrr:info', //详情接口
			delapi: '?apiCode=btn_aqzrr:del', //删除接口
			sbaapi: '?apiCode=btn_aqzrr:sb', //上报接口
			sheapi: '?apiCode=btn_aqzrr:sh', //审核接口
			listlr: 'menu_aqzrr:zllr', //录入列表
			listgl: 'menu_aqzrr:zlgl', //管理列表
			viewurl: '../jbtz/aqfzr_view.html', //详情页面地址
			editurl: '../jbtz/aqfzr_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'Name,Moblie', //显示字段
				p: 'DW_NAME_PRE,QY_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere(" (DW_LX='01' OR (DW_LX='02' AND DW_LB>'01')) ")
				},
				zhut: {
					code: 'Name',
					title: '姓名'
				}
			}
		}
	},
	/**
	 * 重点单位/企业
	 */
	menu_zddw: {
		base: {
			title: '重点单位/企业', //模块名称
			vwpage: 'P4606', //页面编码
			addapi: '?apiCode=btn_zddw:add', //添加接口
			setapi: '?apiCode=btn_zddw:set', //修改接口
			getapi: '?apiCode=page_zddw:info', //详情接口
			delapi: '?apiCode=btn_zddw:del', //删除接口
			sbaapi: '?apiCode=btn_zddw:sb', //上报接口
			sheapi: '?apiCode=btn_zddw:sh', //审核接口
			listlr: 'menu_zddw:zllr', //录入列表
			listgl: 'menu_zddw:zlgl', //管理列表
			viewurl: '../jbtz/zddw_view.html', //详情页面地址
			editurl: '../jbtz/zddw_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'DW_Name,BM_LB_Name', //显示字段
				p: 'DW_NAME_PRE,QY_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere("DW_LX='01'")
				},
				zhut: {
					code: 'DW_Name',
					title: '重点单位/企业名称'
				}
			}
		}
	},
	/**
	 * 农村无牌机动车
	 */
	menu_jdcgl_wu: {
		base: {
			title: '农村无牌机动车', //模块名称
			vwpage: 'P4506', //页面编码
			addapi: '?apiCode=btn_jdcgl_wu:add', //添加接口
			setapi: '?apiCode=btn_jdcgl_wu:set', //修改接口
			getapi: '?apiCode=page_jdcgl_wu:info', //详情接口
			delapi: '?apiCode=btn_jdcgl_wu:del', //删除接口
			sbaapi: '?apiCode=btn_jdcgl_wu:sb', //上报接口
			sheapi: '?apiCode=btn_jdcgl_wu:sh', //审核接口
			listlr: 'menu_jdcgl_wu:zllr', //录入列表
			listgl: 'menu_jdcgl_wu:zlgl', //管理列表
			viewurl: '../jbtz/jdc_wp_view.html', //详情页面地址
			editurl: '../jbtz/jdc_wp_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'CheLSYR,CheLLB_Name,CP', //显示字段
				p: 'DW_NAME_PRE,QY_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere("DW_LX='01'")
				},
				zhut: {
					code: 'CP',
					title: '车辆特征'
				}
			}
		}
	},
	/**
	 * 农村非机动车
	 */
	menu_fjdc: {
		base: {
			title: '农村非机动车', //模块名称
			vwpage: 'P7206', //页面编码
			addapi: '?apiCode=btn_fjdc:add', //添加接口
			setapi: '?apiCode=btn_fjdc:set', //修改接口
			getapi: '?apiCode=page_fjdc:info', //详情接口
			delapi: '?apiCode=btn_fjdc:del', //删除接口
			sbaapi: '?apiCode=btn_fjdc:sb', //上报接口
			sheapi: '?apiCode=btn_fjdc:sh', //审核接口
			chacapi:'?apiCode=btn_fjdc:cpcc',//查重接口
			listlr: 'menu_fjdc:zllr', //录入列表
			listgl: 'menu_fjdc:zlgl', //管理列表
			viewurl: '../jbtz/jdc_fj_view.html', //详情页面地址
			editurl: '../jbtz/jdc_fj_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'CheLSYR,CP,CheLLB_Name', //显示字段
				p: 'DW_NAME_PRE,QY_Name,ShiYXZ_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere("DW_LX='01'")
				},
				zhut: {
					code: 'CP',
					title: '车牌'
				}
			}
		}
	},
	/**
	 * 交管站
	 */
	menu_glzgl: {
		base: {
			title: '乡镇交管站/办', //模块名称
			vwpage: 'P2606', //页面编码
			addapi: '?apiCode=btn_glzgl:add', //添加接口
			setapi: '?apiCode=btn_glzgl:set', //修改接口
			getapi: '?apiCode=page_glzgl:info', //详情接口
			delapi: '?apiCode=btn_glzgl:del', //删除接口
			sbaapi: '?apiCode=btn_glzgl:sb', //上报接口
			sheapi: '?apiCode=btn_glzgl:sh', //审核接口
			listlr: 'menu_glzgl:zllr', //录入列表
			listgl: 'menu_glzgl:zlgl', //管理列表
			viewurl: '../jbtz/jgz_view.html', //详情页面地址
			editurl: '../jbtz/jgz_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'QY_Name,DW_Phone', //显示字段
				p: 'DW_NAME_PRE,JIAOGZDJ_Name,*yyyy-mm-dd:doTime' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere("DW_LX='01' AND DW_LB<'21'")
				},
				zhut: {
					code: 'DW_Name',
					title: '单位名称'
				}
			}
		}
	},
	/**
	 * 管理单位人员
	 */
	menu_rygldw: {
		base: {
			title: '管理单位人员', //模块名称
			vwpage: 'P4106', //页面编码
			addapi: '?apiCode=btn_rygldw:add', //添加接口
			setapi: '?apiCode=btn_rygldw:set', //修改接口
			getapi: '?apiCode=page_rygldw:info', //详情接口
			delapi: '?apiCode=btn_rygldw:del', //删除接口
			sbaapi: '?apiCode=btn_rygldw:sb', //上报接口
			sheapi: '?apiCode=btn_rygldw:sh', //审核接口
			htapi: '?apiCode=btn_rygldw:qzht',//回退接口
			listlr: 'menu_rygldw:zllr', //录入列表
			listgl: 'menu_rygldw:zlgl', //管理列表
			viewurl: '../jbtz/dwrygl_view.html', //详情页面地址
			editurl: '../jbtz/dwrygl_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'XingM,Mobile', //显示字段
				p: 'DW_NAME_PRE,QY_Name,ZhiW_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("(DW_LX='01' OR (DW_LX='02' AND DW_LB>'01')) ")
				},
				zhut: {
					code: 'XingM',
					title: '单位人员名称'
				}
			}
		}
	},
	/**
	 * 管理单位
	 */
	menu_dwwf: {
		base: {
			title: '单位', //模块名称
			vwpage: 'P2106', //页面编码
			addapi: '?apiCode=btn_dwwf:add', //添加接口
			setapi: '?apiCode=btn_dwwf:set', //修改接口
			getapi: '?apiCode=page_dwwf:info', //详情接口
			delapi: '?apiCode=btn_dwwf:del', //删除接口
			sbaapi: '?apiCode=btn_dwwf:sb', //上报接口
			sheapi: '?apiCode=btn_dwwf:sh', //审核接口
			listlr: 'menu_dwwf:zllr', //录入列表
			listgl: 'menu_dwwf:zlgl', //管理列表
			viewurl: '../jbtz/dwgl_view.html', //详情页面地址
			editurl: '../jbtz/dwgl_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'QY_Name,DW_Phone', //显示字段
				p: 'DW_NAME_PRE' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'DW_Name',
					title: '单位名称'
				}
			}
		}
	},
	/**
	 * 农村交通安全劝导站
	 */
	menu_qdzgl: {
		base: {
			title: '农村交通安全劝导站', //模块名称
			vwpage: 'P2706', //页面编码
			addapi: '?apiCode=btn_qdzgl:add', //添加接口
			setapi: '?apiCode=btn_qdzgl:set', //修改接口
			getapi: '?apiCode=page_qdzgl:info', //详情接口
			delapi: '/btn_qdzgl:del', //删除接口
			sbaapi: '/btn_qdzgl:sb', //上报接口
			sheapi: 'btn_qdzgl:sh', //审核接口
			listlr: 'menu_qdzgl:zllr', //录入列表
			listgl: 'menu_qdzgl:zlgl', //管理列表
			viewurl: '../jbtz/qdz_view.html', //详情页面地址
			editurl: '../jbtz/qdz_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'QY_Name', //显示字段
				p: 'DW_NAME_PRE,QY_Name,DW_Phone' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'DW_Name',
					title: '农村交通安全劝导站/点名称'
				}
			}
		}
	},
	/**
	 * 农村交通安全劝导员
	 */
	menu_ryqdz: {
		base: {
			title: '农村交通安全劝导员', //模块名称
			vwpage: 'P4306', //页面编码
			addapi: '?apiCode=btn_ryqdz:add', //添加接口
			setapi: '?apiCode=btn_ryqdz:set', //修改接口
			getapi: '?apiCode=page_ryqdz:info', //详情接口
			delapi: '?apiCode=btn_ryqdz:del', //删除接口
			sbaapi: '?apiCode=btn_ryqdz:sb', //上报接口
			sheapi: '?apiCode=btn_ryqdz:sh', //审核接口
			listlr: 'menu_ryqdz:zllr', //录入列表
			listgl: 'menu_ryqdz:zlgl', //管理列表
			viewurl: '../jbtz/qdy_view.html', //详情页面地址
			editurl: '../jbtz/qdy_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'XingM,Mobile', //显示字段
				p: 'DW_NAME_PRE,QY_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'XingM',
					title: '姓名'
				}
			}
		}
	},
	/*
	 * 农村驾驶人
	 */
	menu_jsy: {
		base: {
			title: '农村驾驶人', //模块名称
			vwpage: 'P4706', //页面编码
			addapi: '?apiCode=btn_jsy:add', //添加接口
			setapi: '?apiCode=btn_jsy:set', //修改接口
			getapi: '?apiCode=page_jsy:info', //详情接口
			delapi: '?apiCode=btn_jsy:del', //删除接口
			sbaapi: '?apiCode=btn_jsy:sb', //上报接口
			sheapi: '?apiCode=btn_jsy:sh', //审核接口
			htapi: '?apiCode=btn_jsy:qzht',//回退接口
			chacapi: '?apiCode=btn_jsy:sfzcc', //身份证号查重接口
			tiqapi: '?apiCode=btn_jsy:hlcx', //身份证号提取接口
			listlr: 'menu_jsy:zllr', //录入列表
			listgl: 'menu_jsy:zlgl', //管理列表
			viewurl: '../jbtz/jsr_view.html', //详情页面地址
			editurl: '../jbtz/jsr_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'XingM,SFZH', //显示字段
				p: 'DW_NAME_PRE,QY_Name,Mobile' //显示字段
			},
			search: {
				type: 'complex', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'XingM',
					title: '姓名'
				},
				complex:[
					{
						type:"dw",
						code:"QY_Code",
						title:"行政区划",
						where:treeWhere(" DW_LX='01' ")
					},
					{
						type:"other",
						title:"农机驾驶人/身份证号",
						other:[
							{
								code:"ISNONGJJSY",
								type:"radioitem",
								title:"农机驾驶人",
								item:"PanD"
							},
							{
								code:"SFZH",
								type:"text",
								lx:"number",
								title:"身份证号"
							},
							{
								code:"cjdate",
								type:"date",
								title:"统计时间"
							}
						]
					},
					{
						type:"other",
						title:"其他",
						other:[
							{
								code:"isShenH",
								type:"radioitem",
								title:"状态",
								item:"ShuJZT"
							},
							{
								code:"isJSZ",
								type:"radioitem",
								title:"驾驶证",
								item:"",
								option:"有,有;无,无"
							},
							{
								code:"addTime",
								type:"date",
								title:"录入时间"
							}
						]
					}
				]
			}
		}
	},
	/*
	 * 农村机动车
	 */
	menu_jdcgl: {
		base: {
			title: '农村机动车', //模块名称
			vwpage: 'P2206', //页面编码
			addapi: '?apiCode=btn_jdcgl:add', //添加接口
			setapi: '?apiCode=btn_jdcgl:set', //修改接口
			getapi: '?apiCode=page_jdcgl:info', //详情接口
			delapi: '?apiCode=btn_jdcgl:del', //删除接口
			sbaapi: '?apiCode=btn_jdcgl:sb', //上报接口
			sheapi: '?apiCode=btn_jdcgl:sh', //审核接口
			htapi: '?apiCode=btn_jdcgl:qzht',//回退接口
			chacapi: '?apiCode=btn_jdcgl:cpcc', //号牌查重接口
			tiqapi: '?apiCode=btn_jdcgl:hpcc', //号牌提取接口
			listlr: 'menu_jdcgl:zllr', //录入列表
			listgl: 'menu_jdcgl:zlgl', //管理列表
			viewurl: '../jbtz/jdc_view.html', //详情页面地址
			editurl: '../jbtz/jdc_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'CP,HPZL_Name', //显示字段
				p: 'DW_NAME_PRE,QY_Name,ShiYXZ_Name' //显示字段
			},
			search: {
				type: 'complex', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'CP',
					title: '号牌号码'
				},
				complex:[
					{
						type:"dw",
						code:"QY_Code",
						title:"行政区划",
						where:treeWhere(" DW_LX='01' ")
					},
					{
						type:"other",
						title:"号牌种类/使用性质",
						other:[
							{
								code:"HPZL",
								type:"radioitem",
								title:"号牌种类",
								item:"HaoPZL"
							},
							{
								code:"ShiYXZ",
								type:"radioitem",
								title:"使用性质",
								item:"ShiYXZ"
							}
						]
					},
					{
						type:"other",
						title:"其他",
						other:[
							{
								code:"IsKY",
								type:"radioitem",
								title:"是否客运",
								item:"",
								option:"1,是;0,否"
							},
							{
								code:"QZTJ",
								type:"radioitem",
								title:"5个前置条件",
								item:"",
								option:"1,满足;0,不满足"
							},
							{
								code:"isShenH",
								type:"radioitem",
								title:"状态",
								item:"ShuJZT"
							},
							{
								code:"addTime",
								type:"date",
								title:"录入时间"
							}
						]
					}
				]
			}
		}
	},
	/*
	 * 农村道路
	 */
	menu_dlgl: {
		base: {
			title: '农村道路', //模块名称
			vwpage: 'P2006', //页面编码
			addapi: '?apiCode=btn_dlgl:add', //添加接口
			setapi: '?apiCode=btn_dlgl:set', //修改接口
			getapi: '?apiCode=page_dlgl:info', //详情接口
			delapi: '?apiCode=btn_dlgl:del', //删除接口
			sbaapi: '?apiCode=btn_dlgl:sb', //上报接口
			sheapi: '?apiCode=btn_dlgl:sh', //审核接口
			htapi: '?apiCode=btn_dlgl:qzht',//回退接口
			listlr: 'menu_dlgl:zllr', //录入列表
			listgl: 'menu_dlgl:zlgl', //管理列表
			viewurl: '../jbtz/daol_view.html', //详情页面地址
			editurl: '../jbtz/daol_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'DaoLMC', //显示字段
				p: 'DW_NAME_PRE,QY_Name,DaoLLB_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'DaoLMC',
					title: '农村道路名称'
				}
			}
		}
	},
	/*
	 * 农村重要交叉路口
	 */
	menu_jclk: {
		base: {
			title: '农村重要交叉路口', //模块名称
			vwpage: 'P5506', //页面编码
			addapi: '?apiCode=btn_jclk:add', //添加接口
			setapi: '?apiCode=btn_jclk:set', //修改接口
			getapi: '?apiCode=page_jclk:info', //详情接口
			delapi: '?apiCode=btn_jclk:del', //删除接口
			sbaapi: '?apiCode=btn_jclk:sb', //上报接口
			sheapi: '?apiCode=btn_jclk:sh', //审核接口
			htapi: '?apiCode=btn_jclk:qzht',//回退接口
			listlr: 'menu_jclk:zllr', //录入列表
			listgl: 'menu_jclk:zlgl', //管理列表
			viewurl: '../jbtz/jclk_view.html', //详情页面地址
			editurl: '../jbtz/jclk_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'JiaoCLKMC', //显示字段
				p: 'DW_NAME_PRE,QY_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'JiaoCLKMC',
					title: '农村重要交叉路口名称'
				}
			}
		}
	},

	/*
	 * 宣传阵地管理
	 */
	menu_xczdgl: {
		base: {
			title: '安全宣传阵地', //模块名称
			vwpage: 'P2806', //页面编码
			addapi: '?apiCode=btn_xczdgl:add', //添加接口
			setapi: '?apiCode=btn_xczdgl:set', //修改接口
			getapi: '?apiCode=page_xczdgl:info', //详情接口
			delapi: '/btn_xczdgl:del', //删除接口
			sbaapi: '/btn_xczdgl:sb', //上报接口
			sheapi: '/btn_xczdgl:sh', //审核接口
			listlr: 'menu_xczdgl:zllr', //录入列表
			listgl: 'menu_xczdgl:zlgl', //管理列表
			htapi: '?apiCode=btn_xczdgl:qzht',//回退接口
			viewurl: '../jbtz/xczdgl_view.html', //详情页面地址
			editurl: '../jbtz/xczdgl_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'Name', //显示字段
				p: 'DW_NAME_PRE,QY_Name,ZDLX_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'Name',
					title: '阵地名称'
				}
			}
		}
	},
	/*
	 * 乡镇交通安全管理员
	 */
	menu_ryjgz: {
		base: {
			title: '乡镇交通安全管理员', //模块名称
			vwpage: 'P4206', //页面编码
			addapi: '?apiCode=btn_ryjgz:add', //添加接口
			setapi: '?apiCode=btn_ryjgz:set', //修改接口
			getapi: '?apiCode=page_ryjgz:info', //详情接口
			delapi: '/btn_ryjgz:del', //删除接口
			sbaapi: '/btn_ryjgz:sb', //上报接口
			sheapi: '/btn_ryjgz:sh', //审核接口
			listlr: 'menu_ryjgz:zllr', //录入列表
			listgl: 'menu_ryjgz:zlgl', //管理列表
			viewurl: '../jbtz/ryjgz_view.html', //详情页面地址
			editurl: '../jbtz/ryjgz_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'XingM,Mobile', //显示字段
				p: 'DW_NAME_PRE,QY_Name,RenYLB_Name,ZhiW_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("((DW_LX='01') OR (DW_LX='02' AND DW_LB='13')) ")
				},
				zhut: {
					code: 'XingM',
					title: '人员名称'
				}
			}
		}
	},
	/**
	 * 行政区划
	 */
	menu_xzqh: {
		base: {
			title: '行政区划', //模块名称
			vwpage: 'P2502', //页面编码
			addapi: '?apiCode=btn_xzqhgl:add', //添加接口
			setapi: '?apiCode=btn_xzqhgl:set', //修改接口
			getapi: '?apiCode=pge_xzqhgl:info', //详情接口
			delapi: '?apiCode=btn_xzqhgl:del', //删除接口
		}
	},
	//****************************动态管理***************************************
	/**
	 * 工作督检
	 */
	menu_gzdj: {
		base: {
			title: '工作督检', //模块名称
			vwpage: 'P8406', //页面编码
			addapi: '?apiCode=btn_gzdj:add', //添加接口
			setapi: '?apiCode=btn_gzdj:set', //修改接口
			getapi: '?apiCode=page_gzdj:info', //详情接口
			sygzdjapi: '?apiCode=page_gzdj:infop', //首页督检
			delapi: '?apiCode=btn_gzdj:del', //删除接口
			sbaapi: '?apiCode=btn_gzdj:sb', //上报接口
			sheapi: '?apiCode=btn_gzdj:sh', //审核接口
			htapi: '?apiCode=btn_gzdj:qzht',//回退接口
			listlr: 'menu_gzdj:zllr', //录入列表
			listgl: 'menu_gzdj:zlgl', //管理列表
			listdbgl: 'menu_gzdj:dbgl', //待办管理列表
			viewurl: '../dtgl/gzdj_view.html', //详情页面地址
			editurl: '../dtgl/gzdj_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'ZhuT', //显示字段
				p: 'DW_NAME_PRE,QY_Name,DuJSJ' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("")
				},
				zhut: {
					code: 'ZhuT',
					title: '督检主题'
				}
			}
		}
	},

	/**
	 * 优秀典型
	 */
	menu_yxdx: {
		base: {
			title: '优秀典型', //模块名称
			vwpage: 'P7806', //页面编码
			addapi: '', //添加接口
			setapi: '', //修改接口
			getapi: '?apiCode=page_yxdx:info', //详情接口
			delapi: '', //删除接口
			sbaapi: '?apiCode=btn_yxdx:sb', //上报接口
			sheapi: '?apiCode=btn_yxdx:qzht', //审核接口
			listlr: '', //录入列表
			listgl: 'menu_yxdx:zlgl', //管理列表
			viewurl: '../dtgl/yxdx_view.html', //详情页面地址
			editurl: '' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'zhut', //显示字段
				p: 'DW_NAME_PRE,QY_Name,TuiSDX_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("")
				},
				zhut: {
					code: 'BT',
					title: '标题'
				}
			}
		}
	},
	/**
	 * 制度建设与通知通报
	 */
	menu_wjgl: {
		base: {
			title: '制度建设和通知通报', //模块名称
			vwpage: 'P8006', //页面编码
			addapi: '', //添加接口
			setapi: '', //修改接口
			getapi: '?apiCode=page_wjgl:info', //详情接口
			sytztbapi: '?apiCode=page_wjgl:infop', //首页通知通报接口
			delapi: '', //删除接口
			sbaapi: '', //上报接口
			sheapi: '', //审核接口
			listlr: 'menu_wjgl:sjfw', //录入列表
			listgl: 'menu_wjgl:zlgl', //管理列表
			viewurl: '../dtgl/zhidjs_view.html', //详情页面地址
			editurl: '../dtgl/zhidjs_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'ZHUT', //显示字段
				p: 'DW_NAME_PRE,QY_Name,WenJLB_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("")
				},
				zhut: {
					code: 'ZhuT',
					title: '文件名称'
				}
			}
		}
	},
	/**
	 * 会议记录
	 */
	menu_hyjlgl: {
		base: {
			title: '会议记录', //模块名称
			vwpage: 'P3206', //页面编码
			addapi: '?apiCode=btn_hyjlgl:add', //添加接口
			setapi: '?apiCode=btn_hyjlgl:set', //修改接口
			getapi: '?apiCode=page_hyjlgl:info', //详情接口
			delapi: '?apiCode=btn_hyjlgl:del', //删除接口
			sbaapi: '?apiCode=btn_hyjlgl:sb', //上报接口
			sheapi: '?apiCode=btn_hyjlgl:sh', //审核接口
			htapi: '?apiCode=btn_hyjlgl:qzht',//回退接口
			listlr: 'menu_hyjlgl:zllr', //录入列表
			listgl: 'menu_hyjlgl:zlgl', //管理列表
			viewurl: '../dtgl/hyjl_view.html', //详情页面地址
			editurl: '../dtgl/hyjl_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'ZhuT', //显示字段
				p: 'DW_NAME_PRE,QY_Name,XuanCLB_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("")
				},
				zhut: {
					code: 'ZhuT',
					title: '会议主题'
				}
			}
		}
	},
	/**
	 * 群体性活动及登记
	 */
	menu_qthddj: {
		base: {
			title: '群体性活动登记', //模块名称
			vwpage: 'P3106', //页面编码
			addapi: '?apiCode=btn_qthddj:add', //添加接口
			setapi: '?apiCode=btn_qthddj:set', //修改接口
			getapi: '?apiCode=page_qthddj:info', //详情接口
			delapi: '?apiCode=btn_qthddj:del', //删除接口
			sbaapi: '?apiCode=btn_qthddj:sb', //上报接口
			sheapi: '?apiCode=btn_qthddj:sh', //审核接口
			htapi: '?apiCode=btn_qthddj:qzht',//回退接口
			listlr: 'menu_qthddj:zllr', //录入列表
			listgl: 'menu_qthddj:zlgl', //管理列表
			viewurl: '../dtgl/qtxhd_view.html', //详情页面地址
			editurl: '../dtgl/qtxhd_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'ZhuT', //显示字段
				p: 'DW_NAME_PRE,QY_Name,XuanCLB_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'ZhuT',
					title: '活动名称'
				}
			}
		}
	},
	/*
	 * 道路隐患
	 */
	menu_dlyhgl: {
		base: {
			title: '道路隐患', //模块名称
			vwpage: 'P3306', //页面编码
			addapi: '?apiCode=btn_dlyhgl:add', //添加接口
			setapi: '?apiCode=btn_dlyhgl:set', //修改接口
			getapi: '?apiCode=page_dlyhgl:info', //详情接口
			delapi: '?apiCode=btn_dlyhgl:del', //删除接口
			sbaapi: '?apiCode=btn_dlyhgl:sb', //上报接口
			sheapi: '?apiCode=btn_dlyhgl:sh', //审核接口
			sydbyhapi: '?apiCode=page_dlyhgl:infop', //首页待办跳转
			listlr: 'menu_dlyhgl:zllr', //录入列表
			listgl: 'menu_dlyhgl:zlgl', //管理列表
			viewurl: '../dtgl/dlyh_view.html', //详情页面地址
			editurl: '../dtgl/dlyh_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'DaoLMC,YinHLDMC',
				p: 'YinHLB_Name,*yyyy-mm-dd:YinHFXTime,DuBDJ_Name,DaoLLB_Name,QY_Name'
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'YinHLDMC',
					title: '隐患路段名称'
				}
			}
		}
	},
	/*
	 * 安全工作劝导台账
	 */
	menu_qdztz: {
		base: {
			title: '安全工作劝导台账', //模块名称
			vwpage: 'P3506', //页面编码
			addapi: '?apiCode=btn_qdztz:add', //添加接口
			setapi: '?apiCode=btn_qdztz:set', //修改接口
			getapi: '?apiCode=page_qdztz:info', //详情接口
			delapi: '?apiCode=btn_qdztz:del', //删除接口
			sbaapi: '?apiCode=btn_qdztz:sb', //上报接口
			sheapi: '?apiCode=btn_qdztz:sh', //审核接口
			htapi: '?apiCode=btn_qdztz:qzht',//回退接口
			listlr: 'menu_qdztz:zllr', //录入列表
			listgl: 'menu_qdztz:zlgl', //管理列表
			viewurl: '../dtgl/qdztz_view.html', //详情页面地址
			editurl: '../dtgl/qdztz_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'ZhuT', //显示字段
				p: 'QuanDZMC' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'ZhuT',
					title: '工作台帐汇总主题'
				}
			}
		}
	},
	/*
	 * 流动安全宣传教育
	 */
	menu_aqxcjy: {
		base: {
			title: '流动宣传', //模块名称
			vwpage: 'P3606', //页面编码
			addapi: '?apiCode=btn_aqxcjy:add', //添加接口
			setapi: '?apiCode=btn_aqxcjy:set', //修改接口
			getapi: '?apiCode=page_aqxcjy:info', //详情接口
			delapi: '?apiCode=btn_aqxcjy:del', //删除接口
			sbaapi: '?apiCode=btn_aqxcjy:sb', //上报接口
			sheapi: '?apiCode=btn_aqxcjy:sh', //审核接口
			htapi: '?apiCode=btn_aqxcjy:qzht',//回退接口
			listlr: 'menu_aqxcjy:zllr', //录入列表
			listgl: 'menu_aqxcjy:zlgl', //管理列表
			viewurl: '../dtgl/aqxcjy_view.html', //详情页面地址
			editurl: '../dtgl/aqxcjy_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'ZhuT', //显示字段
				p: 'QY_Name,*yyyy-mm-dd:DoTime,XuanCLB_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("")
				},
				zhut: {
					code: 'ZhuT',
					title: '宣传主题'
				}
			}
		}
	},
	/*
	 * 阵地安全宣传教育
	 */
	menu_aqxcjyzd: {
		base: {
			title: '阵地宣传', //模块名称
			vwpage: 'P3606', //页面编码
			addapi: '?apiCode=btn_aqxcjy:add', //添加接口
			setapi: '?apiCode=btn_aqxcjy:set', //修改接口
			getapi: '?apiCode=page_aqxcjy:info', //详情接口
			delapi: '?apiCode=btn_aqxcjy:del', //删除接口
			sbaapi: '?apiCode=btn_aqxcjy:sb', //上报接口
			sheapi: '?apiCode=btn_aqxcjy:sh', //审核接口
			listlr: 'menu_aqxcjyzd:zllr', //录入列表
			listgl: 'menu_aqxcjyzd:zlgl', //管理列表
			viewurl: '../dtgl/aqxcjyzd_view.html', //详情页面地址
			editurl: '../dtgl/aqxcjyzd_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'ZhuT', //显示字段
				p: 'QY_Name,*yyyy-mm-dd:DoTime,XuanCLB_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("")
				},
				zhut: {
					code: 'ZhuT',
					title: '宣传主题'
				}
			}
		}
	},
	/*
	 * 工作计划
	 */
	menu_gzjh: {
		base: {
			title: '工作计划', //模块名称
			vwpage: 'P4806', //页面编码
			addapi: '?apiCode=btn_gzjh:add', //添加接口
			setapi: '?apiCode=btn_gzjh:set', //修改接口
			getapi: '?apiCode=page_gzjh:info', //详情接口
			delapi: '/btn_gzjh:del', //删除接口
			sbaapi: '/btn_gzjh:sb', //上报接口
			sheapi: '/btn_gzjh:sh', //审核接口
			htapi: '?apiCode=btn_gzjh:qzht',//回退接口
			listlr: 'menu_gzjh:zllr', //录入列表
			listgl: 'menu_gzjh:zlgl', //管理列表
			viewurl: '../dtgl/gzjh_view.html', //详情页面地址
			editurl: '../dtgl/gzjh_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'ZhuT', //显示字段
				p: '*yyyy-mm-dd:RiqStart,GZLB_Name,DW_NAME_PRE,QY_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("")
				},
				zhut: {
					code: 'ZhuT',
					title: '计划主题'
				}
			}
		}
	},
	/*
	 * 工作信息
	 */
	menu_gzxx: {
		base: {
			title: '工作信息', //模块名称
			vwpage: 'P4906', //页面编码
			addapi: '?apiCode=btn_gzxx:add', //添加接口
			setapi: '?apiCode=btn_gzxx:set', //修改接口
			getapi: '?apiCode=page_gzxx:info', //详情接口
			getjhapi: '?apiCode=page_gzjh:info', //计划详情接口
			delapi: '/btn_gzxx:del', //删除接口
			sbaapi: '/btn_gzxx:sb', //上报接口
			sheapi: '/btn_gzxx:sh', //审核接口
			htapi: '?apiCode=btn_gzxx:qzht',//回退接口
			listlr: 'menu_gzxx:zllr', //录入列表
			listgl: 'menu_gzxx:zlgl', //管理列表
			viewurl: '../dtgl/gzxx_view.html', //详情页面地址
			editurl: '../dtgl/gzxx_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'ZhuT', //显示字段
				p: '*zdy-item-1:isState,*yyyy-mm-dd:RiqStart,QY_Name',
				item1: [{
					value: '1',
					title: '已取消'
				}, {
					value: '0',
					title: '未办理'
				}, {
					value: '9',
					title: '已办理'
				}]
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("")
				},
				zhut: {
					code: 'ZhuT',
					title: '主题'
				},

				where: [{
					code: 'QY_Code',
					title: '单位名称',
					type: 'danw',
					treewhere: ''
				}, {
					code: 'isState',
					title: '办理状态',
					type: 'itme_special'
				}, {
					code: 'RiqStart',
					title: '执勤日期',
					type: 'dotime'
				}, {
					code: 'AddTime',
					title: '录入时间',
					type: 'dotime'
				}] //搜索条件
			}
		}
	},
	/*
	 * 违法查处
	 */
	menu_wfcc: {
		base: {
			title: '违法管理', //模块名称
			vwpage: 'P5306', //页面编码
			addapi: '?apiCode=btn_wfcc:add', //添加接口
			setapi: '?apiCode=btn_wfcc:set', //修改接口
			getapi: '?apiCode=page_wfcc:info', //详情接口
			tiqapi: '?apiCode=btn_jsy:sfzh', //号牌提取接口
			delapi: '/btn_wfcc:del', //删除接口
			sbaapi: '/btn_wfcc:sb', //上报接口
			sheapi: '/btn_wfcc:sh', //审核接口
			htapi: '?apiCode=btn_wfcc:qzht',//回退接口
			listlr: 'menu_wfcc:zllr', //录入列表
			listgl: 'menu_wfcc:zlgl', //管理列表
			viewurl: '../dtgl/gzjw_view.html', //详情页面地址
			editurl: '../dtgl/gzjw_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: '*replace:||{CP} 违法行为:{WeiFXWMC}<br/>违法人:{XingM} {phone}$CP,WeiFXWMC,XingM,phone', //显示字段
				p: '*yyyy-mm-dd:JiuWSJ,QY_Name,JiuWDD' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("")
				},
				zhut: {
					code: 'XingM',
					title: '违法人姓名'
				}
			}
		}
	},
	/*
	 * 文件发布和传送
	 */
	menu_fbcs: {
		base: {
			title: '文件发布和传送', //模块名称
			vwpage: 'P3006', //页面编码
			addapi: '?apiCode=btn_fbcs:add', //添加接口
			setapi: '?apiCode=btn_fbcs:set', //修改接口
			getapi: '?apiCode=page_fbcs:info', //详情接口
			syfbcsapi: '?apiCode=page_fbcs:infop', //首页跳转
			delapi: '/btn_fbcs:del', //删除接口
			sbaapi: '/btn_fbcs:sb', //上报接口
			sheapi: '/btn_fbcs:sh', //审核接口
			qsapi: '/btn_fbcs:qs', //签收接口
			listlr: 'menu_fbcs:zllr', //录入列表
			listgl: 'menu_fbcs:zlgl', //管理列表
			viewurl: '../dtgl/fbcs_view.html', //详情页面地址
			editurl: '../dtgl/fbcs_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'bm', //数据编码字段
				h4: 'zhut', //显示字段
				p: 'addusermc,fawsj' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("")
				},
				zhut: {
					code: 'zhut',
					title: '发文主题'
				}
			}
		}
	},
	/*
	 * 工作部署及监督
	 */
	menu_gzbs: {
		base: {
			title: '工作部署及监督', //模块名称
			vwpage: 'P3706', //页面编码
			addapi: '?apiCode=btn_gzbs:add', //添加接口
			setapi: '?apiCode=btn_gzbs:set', //修改接口
			getapi: '?apiCode=page_gzbs:info', //详情接口
			sygzbsapi: '?apiCode=page_gzbs:infop', //首页接口
			delapi: '/btn_gzbs:del', //删除接口
			sbaapi: '/btn_gzbs:sb', //上报接口
			sheapi: '/btn_gzbs:sh', //审核接口
			qsapi: '/btn_gzbs:qs', //签收接口
			fkapi: '/btn_gzbs:scwcjg', //签收接口
			listlr: 'menu_gzbs:zllr', //录入列表
			listgl: 'menu_gzbs:zlgl', //管理列表
			viewurl: '../dtgl/gzbs_view.html', //详情页面地址
			editurl: '../dtgl/gzbs_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'bm', //数据编码字段
				h4: 'zhut', //显示字段
				p: 'addusermc,fawsj' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("")
				},
				zhut: {
					code: 'zhut',
					title: '发文主题'
				}
			}
		}
	},
	/*
	 * 专项行动
	 */
	menu_zxxd: {
		base: {
			title: '专项行动', //模块名称
			vwpage: 'P3216', //页面编码
			addapi: '?apiCode=btn_zxxd:add', //添加接口
			setapi: '?apiCode=btn_zxxd:set', //修改接口
			getapi: '?apiCode=page_zxxd:info', //详情接口
			delapi: '?apiCode=btn_zxxd:del', //删除接口
			sbaapi: '?apiCode=btn_zxxd:sb', //上报接口
			sheapi: '?apiCode=btn_zxxd:sh', //审核接口
			listlr: 'menu_zxxd:zllr', //录入列表
			listgl: 'menu_zxxd:zlgl', //管理列表
			viewurl: '../dtgl/zxxd_view.html', //详情页面地址
			editurl: '../dtgl/zxxd_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'bm', //数据编码字段
				h4: 'xingdzt', //显示字段
				p: '*yyyy-mm-dd:kaizsj,xingdlb_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:treeWhere("")
				},
				zhut: {
					code: 'xingdzt',
					title: '行动主题'
				}
			}
		}
	},
	//****************************预警考核****************************************
	/*
	 * 考核结果管理:乡镇
	 */
	menu_yjkh_khjggl: {
		base: {
			title: '区县考核乡镇结果', //模块名称
			vwpage: 'P8312', //页面编码
			addapi: '?apiCode=btn_tsxx:bzts', //添加接口
			setapi: '', //修改接口
			getapi: '?apiCode=btn_yjkh:khjg', //详情接口
			delapi: '', //删除接口
			sbaapi: '', //上报接口
			sheapi: '', //审核接口
			listlr: 'btn_yjkh:khjgxx', //详细信息列表
			listgl: 'menu_yjkh:khjggl', //考核列表
			viewurl: '../yjkh/khjg_view.html', //详情页面地址
			editurl: '' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'code', //数据编码字段
				h4: 'KaoHMC', //显示字段
				p: '*khjg_isfb:IsFB,*yyyy-mm-dd:AddTime,zhut' //显示字段
			},
			search: {
				type: 'concise', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'KaoHMC',
					title: '考核名称'
				}
			}
		}
	},
	/*
	 * 考核结果管理：地市
	 */
	menu_yjkh_khjggl_dis: {
		base: {
			title: '省考核地市结果', //模块名称
			vwpage: 'P8312', //页面编码
			addapi: '?apiCode=btn_tsxx:bzts', //添加接口
			setapi: '', //修改接口
			getapi: '?apiCode=btn_yjkh:khjg', //详情接口
			delapi: '', //删除接口
			sbaapi: '', //上报接口
			sheapi: '', //审核接口
			listlr: 'btn_yjkh:khjgxx_dis', //管理详细列表
			listgl: 'menu_yjkh:khjggl_dis', //管理列表
			viewurl: '../yjkh/khjg_view.html', //详情页面地址
			editurl: '' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'code', //数据编码字段
				h4: 'KaoHMC', //显示字段
				p: '*khjg_isfb:IsFB,*yyyy-mm-dd:AddTime,zhut' //显示字段
			},
			search: {
				type: 'concise', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'ZhuT',
					title: '主题'
				}
			}
		}
	},
	/*
	 * 考核结果管理：区县
	 */
	menu_yjkh_khjggl_qux: {
		base: {
			title: '地市考核区县结果', //模块名称
			vwpage: 'P8312', //页面编码
			addapi: '?apiCode=btn_tsxx:bzts', //添加接口
			setapi: '', //修改接口
			getapi: '?apiCode=btn_yjkh:khjg', //详情接口
			delapi: '', //删除接口
			sbaapi: '', //上报接口
			sheapi: '', //审核接口
			listlr: 'btn_yjkh:khjgxx_qux', //管理详细列表
			listgl: 'menu_yjkh:khjggl_qux', //管理列表
			viewurl: '../yjkh/khjg_view.html', //详情页面地址
			editurl: '' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'code', //数据编码字段
				h4: 'KaoHMC', //显示字段
				p: '*khjg_isfb:IsFB,*yyyy-mm-dd:AddTime,zhut' //显示字段
			},
			search: {
				type: 'concise', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'KaoHMC',
					title: '主题'
				}
			}
		}
	},
	/*
	 * 提示信息
	 */
	menu_tsxx: {
		base: {
			title: '提示信息', //模块名称
			vwpage: 'P8311', //页面编码
			addapi: '?apiCode=btn_tsxx:bzts', //添加接口
			setapi: '', //修改接口
			getapi: '?apiCode=page_tsxx:info', //详情接口
			delapi: '', //删除接口
			sbaapi: '', //上报接口
			sheapi: '', //审核接口
			listlr: '', //录入列表
			listgl: 'menu:tsxx', //管理列表
			viewurl: '../yjkh/tsxx_view.html', //详情页面地址
			editurl: '' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'YuJ_ZhuT', //显示字段
				p: 'DW_NAME_PRE,QY_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'ZhuT',
					title: '主题'
				}
			}
		}
	},
	menu_jkfgl: {
		base: {
			title: '加分扣分管理', //模块名称
			vwpage: 'P8306', //页面编码
			addapi: '?apiCode=btn_jkfgl:add', //添加接口
			setapi: '?apiCode=btn_jkfgl:set', //修改接口
			getapi: '?apiCode=menu_yjkh:info', //详情接口
			delapi: '?apiCode=btn_jkfgl:del', //删除接口
			sbaapi: '?apiCode=btn_jkfgl:sb', //上报接口
			sheapi: '?apiCode=btn_jkfgl:sh', //审核接口
			listlr: 'menu_jkfgl:zllr', //录入列表
			listgl: 'menu_jkfgl:zlgl', //管理列表
			viewurl: '../yjkh/jkfgl_view.html', //详情页面地址
			editurl: '../yjkh/jkfgl_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'KaoHXM', //显示字段
				p: 'DW_NAME_PRE,QY_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'KaoHXM',
					title: '考核项目'
				}
			}
		}
	},
	/*
	 * 预警信息、整改
	 */
	menu_yjxxzg: {
		base: {
			title: '预警信息、整改', //模块名称
			vwpage: 'P8312', //页面编码
			addapi: '', //添加接口
			setapi: '?apiCode=btn_yjxxzg:zg', //整改接口
			getapi: '?apiCode=page_yjxxzg:info', //详情接口
			delapi: '', //删除接口
			sbaapi: '', //上报接口
			sheapi: '', //审核接口
			listlr: '', //录入列表
			listgl: 'menu:yjxxzg', //管理列表
			viewurl: '../yjkh/yjxx_view.html', //详情页面地址
			editurl: '../yjkh/zhengg_edit.html' //整改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'YuJ_ZhuT', //显示字段
				p: 'YUJ_TYPE,YuJ_ZhengGJD,DW_NAME_PRE,QY_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'ZhuT',
					title: '预警主题'
				}
			}
		}
	},

	//****************************事故管理***************************************
	/*
	 * 事故信息
	 */
	menu_zrdcsglr: {
		base: {
			title: '事故信息', //模块名称
			vwpage: 'P3806', //页面编码
			addapi: '?apiCode=btn_zrdcsglr:add', //添加接口
			setapi: '?apiCode=btn_zrdcsglr:set', //修改接口
			getapi: '?apiCode=page_zrdcsglr:info', //详情接口
			delapi: '?apiCode=btn_zrdcsglr:del', //删除接口
			sbaapi: '?apiCode=btn_zrdcsglr:sb', //上报接口
			sheapi: '?apiCode=btn_zrdcsglr:sh', //审核接口
			qsapi: '?apiCode=btn_zrdcsglr:qs', //签收接口
			fkapi: '?apiCode=btn_zrdcsglr:scwcjg', //反馈接口
			listlr: 'menu_zrdcsglr:zllr', //录入列表
			listgl: 'menu_zrdcsglr:zlgl', //管理列表
			viewurl: '../sggl/sgxx_view.html', //详情页面地址
			editurl: '../sggl/sgxx_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'ZhuT', //显示字段
				p: 'DW_NAME_PRE,QY_Name' //显示字段
			},
			search: {
				type: 'complex', //搜索样式
				zhut: {
					code: 'ShiGZhuT',
					title: '事故主题'
				},
				complex: [{
					code: 'QY_Code',
					type: 'dw',
					title: '行政区划',
					where:treeWhere(" DW_LX='01' and DW_LB<25 ")
				},{
					code: 'ShiGLB',
					type: 'radioitem',
					title: '事故类别',
					item: 'ShiGLB',
				},{
					type: 'other',
					title: '其他',
					other:[{
						code: 'TianQLX',
						type: 'radioitem',
						title: '天气类型',
						item: 'TianQLX',
					},{
						code: 'isShenH',
						type: 'radioitem',
						title: '状态',
						item: 'ShuJZT',
					},{
						code: 'addTime',
						type: 'date',
						title: '录入时间'
					}]
				}]
			}
		}
	},
	/*
	 * 事故责任倒查
	 */
	menu_sgzrdc: {
		base: {
			title: '事故责任倒查', //模块名称
			vwpage: 'P3906', //页面编码
			addapi: '', //添加接口
			setapi: '', //修改接口
			getapi: '?apiCode=page_sgzrdc:info', //详情接口
			delapi: '', //删除接口
			sbaapi: '', //上报接口
			sheapi: '', //审核接口
			qsapi: '', //签收接口
			fkapi: '', //反馈接口
			listlr: '', //录入列表
			listgl: 'menu_sgzrdc:zlgl', //管理列表
			viewurl: '../sggl/sgzrdc_view.html', //详情页面地址
			editurl: '' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'ZhuT', //显示字段
				p: 'DW_NAME_PRE,QY_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'ZhuT',
					title: '事故主题'
				}
			}
		}
	},
	/*
	 * 倒查结果信息
	 */
	menu_sgdcjg: {
		base: {
			title: '事故责任倒查', //模块名称
			vwpage: 'P4006', //页面编码
			addapi: '', //添加接口
			setapi: '', //修改接口
			getapi: '?apiCode=page_sgdcjg:info', //详情接口
			delapi: '', //删除接口
			sbaapi: '', //上报接口
			sheapi: '', //审核接口
			qsapi: '', //签收接口
			fkapi: '', //反馈接口
			listlr: '', //录入列表
			listgl: 'menu:sgdcjg', //管理列表
			viewurl: '../sggl/sgdcjg_view.html', //详情页面地址
			editurl: '' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'BM', //数据编码字段
				h4: 'ZhuT', //显示字段
				p: 'DW_NAME_PRE,QY_Name' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'DaoCZhuT',
					title: '倒查主题'
				}
			}
		}
	},
	
	//****************************首页显示***************************************
	/*
	 * 通知通报
	 */
	tongztb: {
		base: {
			title: '通知通报', //模块名称
			vwpage: 'P3806', //页面编码
			viewurl: '../frame/tongztb_view.html', //详情页面地址
		},
		filetool: {
			page: 'tongztb_view',
			code: '5100161008014503685034'
		}
	},

	/*
	 * 文明城市创建宣传资料管理
	 */
	menu_xczlgl: {
		base: {
			title: '安全宣传资料', //模块名称
			vwpage: 'P9106', //页面编码
			addapi: '', //添加接口
			setapi: '', //修改接口
			getapi: '?apiCode=page_xczlgl:info', //详情接口
			delapi: '', //删除接口
			sbaapi: '', //上报接口
			sheapi: '', //审核接口
			qsapi: '', //签收接口
			fkapi: '', //反馈接口
			listlr: '', //录入列表
			listgl: 'menu_xczlgl:zlgl', //管理列表
			viewurl: '../dtgl/xczlgl_view.html', //详情页面地址
			editurl: '' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'bm', //数据编码字段
				h4: 'title', //显示字段
				p: 'qyCode_Name,*yyyy-mm-dd:dotime' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'title',
					title: '主题'
				}
			}
		}
	},

	/*
	 * 文明城市创建宣传管理
	 */
	menu_xcgl: {
		base: {
			title: '安全宣传', //模块名称
			vwpage: 'P3806', //页面编码
			addapi: '?apiCode=btn_xcgl:add', //添加接口
			setapi: '?apiCode=btn_xcgl:set', //修改接口
			getapi: '?apiCode=page_xcgl:info', //详情接口
			delapi: '?apiCode=btn_xcgl:del', //删除接口
			sbaapi: '?apiCode=btn_xcgl:sb', //上报接口
			sheapi: '?apiCode=btn_xcgl:sh', //审核接口
			listlr: 'menu_xcgl:zllr', //录入列表
			listgl: 'menu_xcgl:zlgl', //管理列表
			viewurl: '../dtgl/xcgl_view.html', //详情页面地址
			editurl: '../dtgl/xcgl_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'bm', //数据编码字段
				h4: 'xcsjstar,xclb_Name', //显示字段
				p: 'qyCode_Name,isshenh_name,AddTime' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'title',
					title: '主题'
				}
			}
		}
	},
	/**
	 * 事故情况通报
	 */
	menu_sgqktb: {
		base: {
			title: '事故情况通报', //模块名称
			vwpage: 'P8006', //页面编码
			addapi: '?apiCode=btn_sgqktb:add', //添加接口
			setapi: '?apiCode=btn_sgqktb:set', //修改接口
			getapi: '?apiCode=page_sgqktb:info', //详情接口
			sytztbapi: '?apiCode=page_sgqktb:infop', //首页通知通报接口
			delapi: '?apiCode=btn_sgqktb:del', //删除接口
			sbaapi: '?apiCode=btn_sgqktb:sb', //上报接口
			sheapi: '?apiCode=btn_sgqktb:sh', //审核接口
			listlr: 'menu_sgqktb:zllr', //录入列表
			listgl: 'menu_sgqktb:zlgl', //管理列表
			listtb: 'menu_sgqktb:sjtb', //管理列表
			viewurl: '../dtgl/sgqktb_view.html', //详情页面地址
			editurl: '../dtgl/sgqktb_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'bm', //数据编码字段
				h4: 'title', //显示字段
				p: 'QY_Name,*yyyy-mm-dd:dotime' //显示字段
			},
			search: {
				type: 'common', //搜索样式
				unit:{
					title:'选择单位名称',
					where:"(dw_lx='01' and dw_lb<21)"
				},
				zhut: {
					code: 'title',
					title: '事故主题'
				}
			}
		}
	},
	/**
	 * 提示信息
	 */
	menu_msglist: {
		base: {
			title: '提示信息', //模块名称
			addapi: '', //添加接口
			setapi: '', //修改接口
			getapi: '?apiCode=notifyInfo', //详情接口
			sytztbapi: '', //首页通知通报接口
			delapi: '', //删除接口
			sbaapi: '', //上报接口
			sheapi: '', //审核接口
			listlr: 'notifylist', //录入列表
			listgl: '', //管理列表
			viewurl: '../jbtz/tsxx_view.html', //详情页面地址
			editurl: '' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'bm', //数据编码字段
				h4: '*sfck:sfck,title', //显示字段
				p: 'module,addtime' //显示字段
			},
			search: {
				type: 'none', //搜索样式
				unit:{
					title:'选择单位名称',
					where:"(dw_lx='01' and dw_lb<21)"
				},
				zhut: {
					code: 'title',
					title: '事故主题'
				}
			}
		}
	},
	/**
	 * 交通违法举报
	 */
	menu_jtwfjb: {
		base: {
			title: '违法举报', //模块名称
			vwpage: 'P8006', //页面编码
			addapi: '?apiCode=btn_jtwfjb:add', //添加接口
			setapi: '?apiCode=btn_jtwfjb:set', //修改接口
			getapi: '?apiCode=page_jtwfjb:info', //详情接口
			delapi: '?apiCode=btn_jtwfjb:del', //删除接口
			sbaapi: '?apiCode=btn_jtwfjb:sb', //上报接口
			sheapi: '?apiCode=btn_jtwfjb:sh', //审核接口
			listlr: 'menu_jtwfjb:zllr', //录入列表
			listgl: 'menu_jtwfjb:zlgl', //管理列表
			listtb: 'menu_jtwfjb:sjtb', //管理列表
			listysh: 'menu_jtwfjb:ysh', //录入列表
			listwsh: 'menu_jtwfjb:wsh', //管理列表
			viewurl: '../dtgl/jtwfjb_view.html', //详情页面地址
			editurl: '' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'bm', //数据编码字段
				h4: 'clgsd_Name,cp,jublx_Name', //显示字段
				p: '*shzt:shzt_Name,qyCode_Name,dotime,xingsfx_Name,chepys_Name' //显示字段
			},
			search: {
				type: 'complex', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'wfms',
					title: '描述'
				},
				complex:[
					{
						type:"dw",
						code:"QY_Code",
						title:"行政区划",
						where:treeWhere(" DW_LX='01' ")
					},
					{
						type:"other",
						title:"举报类型",
						code:'jublx',
						type:'radioitem',
						item:'JuBLX'
					},
					{
						type:"other",
						title:"其他",
						other:[
							{
								code:"cp",
								type:"text",
								title:"车牌号码"
							},
							{
								code:"shzt",
								type:"radioitem",
								title:"审核状态",
								item:"shzt:1,未接纳;9,已接纳"
							},
							{
								code:"chepys",
								type:"radioitem",
								title:"车牌颜色",
								item:"ChePYS"
							},
							{
								code:"dotime",
								type:"date",
								title:"违法时间"
							}
						]
					}
				]
			}
		}
	},
	/**
	 * 交通线索举报
	 */
	menu_jtxsjb: {
		base: {
			title: '线索举报', //模块名称
			vwpage: 'P8006', //页面编码
			addapi: '?apiCode=btn_jtxsjb:add', //添加接口
			setapi: '', //修改接口
			getapi: '?apiCode=page_jtwfjb:info', //详情接口
			delapi: '?apiCode=btn_jtwfjb:del', //删除接口
			sbaapi: '?apiCode=btn_jtwfjb:sb', //上报接口
			sheapi: '?apiCode=btn_jtwfjb:sh', //审核接口
			listlr: 'menu_jtwfjb:zllr', //录入列表
			listgl: 'menu_jtwfjb:zlgl', //管理列表
			listtb: 'menu_jtwfjb:sjtb', //管理列表
			viewurl: '../dtgl/jtwfjb_view.html', //详情页面地址
			editurl: '' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'bm', //数据编码字段
				h4: '*sfck:sfck,title', //显示字段
				p: 'module,addtime' //显示字段
			},
			search: {
				type: 'none', //搜索样式
				unit:{
					title:'选择单位名称',
					where:"(dw_lx='01' and dw_lb<21)"
				},
				zhut: {
					code: 'title',
					title: '事故主题'
				}
			}
		}
	},
	/**
	*人员巡查
	*/
	menu_ryxc_list: {
		base: {
			title: '人员巡查', //模块名称
			vwpage: 'P9908', //页面编码
			addapi: '?apiCode=btn_ryxc:add', //添加接口
			setapi: '?apiCode=btn_ryxc:set', //修改接口
			listlr: 'menu_ryxc:list',
			getapi: '?apiCode=page_ryxc:info', //详情接口
			delapi: '?apiCode=btn_ryxc:del', //删除接口
			viewurl: '../dtgl/ryxc_view.html', //详情页面地址
			editurl: '../dtgl/ryxc_edit.html' //修改页面地址
		},
		list: {
			show: {
				type: 'double', //显示样式
				code: 'bm', //数据编码字段
				h4: '*zgjg:zgjg_Name,weifdd', //显示字段
				p: '*yyyy-mm-dd-hh-mm:dotime' //显示字段
			},
			search: {
				type: 'none', //搜索样式
				unit:{
					title:'选择行政区划',
					where:treeWhere(" DW_LX='01' ")
				},
				zhut: {
					code: 'wfms',
					title: '描述'
				}
			}
		}
	}
};

function treeWhere(strIn){
	var str = strIn;
	str = str.replace(/or/g,"*oorr*");
	str = str.replace(/OR/g,"*oorr*");
	str = str.replace(/and/g,"*aanndd*");
	str = str.replace(/AND/g,"*aanndd*");
	return str;
}

export default list_data;