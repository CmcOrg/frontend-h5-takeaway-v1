import {getByValueFromDictList, GetDictList, YesNoDict} from "@/util/DictUtil";
import {ProFormColumnsType} from "@ant-design/pro-components";
import {TakeawaySkuInsertOrUpdateDTO} from "@/api/admin/TakeawaySkuController";
import {TakeawaySpuPage} from "@/api/admin/TakeawaySpuController";
import {OptionProps} from "antd/es/select";
import {TakeawayCategorySceneTypeEnumSelectList} from "@/page/takeaway/Category/Enums";

export const InitForm: TakeawaySkuInsertOrUpdateDTO = {} as TakeawaySkuInsertOrUpdateDTO

const SchemaFormColumnList = (): ProFormColumnsType<TakeawaySkuInsertOrUpdateDTO>[] => {
    return [

        {
            title: '关联SPU',
            dataIndex: 'spuId',
            valueType: 'select',
            formItemProps: {
                rules: [
                    {
                        required: true,
                    },
                ],
            },
            fieldProps: {
                showSearch: true,
                optionLabelProp: 'children',
                // @ts-ignore
                optionItemRender: (item: OptionProps) => {
                    return <div>
                        {getByValueFromDictList(TakeawayCategorySceneTypeEnumSelectList, item.scene)}-{item.label}
                    </div>
                },
            },
            request: () => {
                return GetDictList(TakeawaySpuPage, true)
            }
        },

        {
            title: '规格参数',
            dataIndex: 'spuSpecJsonListStr',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        whitespace: true,
                    },
                ],
            },
        },

        {
            title: '价格',
            dataIndex: 'price',
            formItemProps: {
                rules: [
                    {
                        required: true,
                    },
                ],
            },
        },

        {
            title: '最低购买',
            dataIndex: 'minBuyNumber',
            tooltip: '单次最低购买的数量',
        },

        {
            title: '最高购买',
            dataIndex: 'maxBuyNumber',
            tooltip: '单次最高购买的数量',
        },

        {
            title: '优惠价格',
            dataIndex: 'discountPrice',
            tooltip: '可以实现第一个为 0.01元',
        },

        {
            title: '优惠个数',
            dataIndex: 'discountNumber',
            tooltip: '可以实现第一个为 0.01元',
        },

        {
            title: '打包价格',
            dataIndex: 'packagePrice',
        },

        {
            title: '备货时长',
            dataIndex: 'prepareS',
            tooltip: '单位：秒',
        },

        {
            title: '是否启用',
            dataIndex: 'enableFlag',
            valueEnum: YesNoDict,
            valueType: 'switch',
        },

        {
            title: '备注',
            dataIndex: 'remark',
            valueType: 'textarea',
            formItemProps: {
                rules: [
                    {
                        whitespace: true,
                        max: 300,
                    },
                ],
            },
            fieldProps: {
                showCount: true,
                maxLength: 300,
                allowClear: true,
            }
        },

    ]
}

export default SchemaFormColumnList
