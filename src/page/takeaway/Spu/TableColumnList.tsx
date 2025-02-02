import {YesNoDict} from "@/util/DictUtil";
import {ActionType, ProColumns} from "@ant-design/pro-components";
import {TakeawaySpuDeleteByIdSet, TakeawaySpuDO, TakeawaySpuInsertOrUpdateDTO} from "@/api/admin/TakeawaySpuController";
import {ExecConfirm, ToastSuccess} from "@/util/ToastUtil";
import {TakeawayCategorySceneTypeEnumSelectList} from "@/page/takeaway/Category/Enums";

const TableColumnList = (currentForm: React.MutableRefObject<TakeawaySpuInsertOrUpdateDTO | null>, setFormVisible: React.Dispatch<React.SetStateAction<boolean>>, actionRef: React.RefObject<ActionType>): ProColumns<TakeawaySpuDO>[] => [

    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'index',
        width: 90,
    },

    {title: '主键 id', dataIndex: 'id', ellipsis: true,},

    {title: 'SPU名称', dataIndex: 'name', ellipsis: true,},

    {
        title: '场景', dataIndex: 'scene', valueType: 'select',
        fieldProps: {
            showSearch: true,
            options: TakeawayCategorySceneTypeEnumSelectList,
        },
    },

    {
        title: '是否必选',
        dataIndex: 'mustFlag',
        valueEnum: YesNoDict
    },

    {title: '排序号', dataIndex: 'orderNo', ellipsis: true, width: 90, hideInSearch: true,},

    {
        title: '创建时间',
        dataIndex: 'createTime',
        hideInSearch: true,
        valueType: 'fromNow',
    },

    {
        title: '修改时间',
        dataIndex: 'updateTime',
        hideInSearch: true,
        valueType: 'fromNow',
    },

    {
        title: '是否启用',
        dataIndex: 'enableFlag',
        valueEnum: YesNoDict
    },

    {title: '备注', dataIndex: 'remark', ellipsis: true, width: 90,},

    {
        title: '操作',
        dataIndex: 'option',
        valueType: 'option',
        render: (dom, entity) => [
            <a key="1" onClick={() => {
                currentForm.current = {id: entity.id} as TakeawaySpuInsertOrUpdateDTO
                setFormVisible(true)
            }}>编辑</a>,
            <a key="2" className={"red3"} onClick={() => {
                ExecConfirm(() => {
                    return TakeawaySpuDeleteByIdSet({idSet: [entity.id!]}).then(res => {
                        ToastSuccess(res.msg)
                        actionRef.current?.reload()
                    })
                }, undefined, `确定删除【${entity.name}】吗？`)
            }}>删除</a>,
        ],
    },
];

export default TableColumnList
