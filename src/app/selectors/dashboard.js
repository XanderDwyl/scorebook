import { List, Seq } from 'immutable';
import { createSelector } from 'reselect';

const addTags = (state, tag) =>
  state.updateIn(['info', 'like_tags'], likeTags =>
    likeTags.push(Seq(tag).toMap()),
  );
const blockTags = (state, tag) =>
  state.updateIn(['info', 'blocked_tags'], blockedTags =>
    blockedTags.push(Seq(tag).toMap()),
  );
const filterAccounts = (state, filterAccount) => {
  const accountLists = state.get('accounts');
  return accountLists.filter(
    account => account.get('username').indexOf(filterAccount) === -1,
  );
};
const filterLikeTags = (state, filterLikeTag) => {
  let likeTagLists = state.getIn(['info', 'like_tags']);
  likeTagLists = likeTagLists.filter(
    likeTag => likeTag.get('id') !== filterLikeTag.tagId,
  );

  return state.setIn(['info', 'like_tags'], likeTagLists);
};

const filterBlockedTags = (state, filterBlockedTag) => {
  let blockedTagLists = state.getIn(['info', 'blocked_tags']);
  blockedTagLists = blockedTagLists.filter(
    blockedTags => blockedTags.get('id') !== filterBlockedTag.tagId,
  );

  return state.setIn(['info', 'blocked_tags'], blockedTagLists);
};

const addSpeedSettings = (state, settings) =>
  state.setIn(['info', 'setting'], Seq(settings).toMap());

const addBlockedUser = (state, block) =>
  state.updateIn(['info', 'blocked_accounts'], blockUser =>
    blockUser.push(Seq(block).toMap()),
  );
const removeBlockedUser = (state, selectedUser) => {
  let blockedUsers = state.getIn(['info', 'blocked_accounts']);
  if (blockedUsers) {
    blockedUsers = blockedUsers.filter(
      blockUser => blockUser.get('id') !== selectedUser.blocked_user_id,
    );
  }

  return state.setIn(['info', 'blocked_accounts'], blockedUsers);
};

export const removeBlockUserSelector = createSelector(
  [removeBlockedUser],
  accounts => accounts,
);

export const addSpeedSettingsSelector = createSelector(
  [addSpeedSettings],
  accounts => accounts,
);

export const addBlockUserSelector = createSelector(
  [addBlockedUser],
  accounts => accounts,
);
export const addTagSelector = createSelector([addTags], accounts => accounts);
export const addBlockedTagSelector = createSelector(
  [blockTags],
  accounts => accounts,
);
export const removeAccountSelector = createSelector(
  [filterAccounts],
  accounts => accounts,
);
export const removeLikeTagSelector = createSelector(
  [filterLikeTags],
  accounts => accounts,
);
export const removeBlockedTagSelector = createSelector(
  [filterBlockedTags],
  accounts => accounts,
);

// liketags selector count
export const getLikeTagsCount = state =>
  state.dashboard.getIn(['info', 'like_tags']).size;
export const getPlanName = state =>
  state.dashboard.getIn(['info', 'plan', 'name']);

/**
 * Get : Filter immutable object.
 *
 * @param { state } `Immutable` object.
 * @param { data } `Object` is data to filter.
 * @param { params } `Object` which consist the following keys.
 *      @param { loc } `String` to get a value within a structure of data.
 *      @param { item_field } `String` a conditional field to filter.
 *      @param { data_field } `String` a conditional field to filter.
 * return { state } will return the final state value.
 */
const filterDataGetSelector = (state, data, params) => {
  let lists = state.get(params.loc);
  lists = lists.filter(
    item => item.get(params.item_field) !== data[params.data_field],
  );

  return lists;
};
export const filterGetSelector = createSelector(
  [filterDataGetSelector],
  data => data,
);

/**
 * GetIn : Filter immutable object.
 *
 * @param { state } `Immutable` object.
 * @param { data } `Object` is data to filter.
 * @param { params } `Object` which consist the following keys.
 *      @param { arrLoc } `Array` to get a value deep within a structure of data.
 *      @param { item_field } `String` a conditional field to filter.
 *      @param { data_field } `String` a conditional field to filter.
 * return { state } will return the final state value.
 */
const filterDataGetInSelector = (state, data, params) => {
  let lists = state.getIn(params.arrLoc);
  let checkLast = false;

  lists = lists.filter((item, index) => {
    const selectedItem = item.get(params.item_field);

    if (params.willCheckLast) {
      checkLast =
        lists.size - 1 === index && selectedItem === data[params.data_field];
    }

    return item.get(params.item_field) !== data[params.data_field];
  });

  if (checkLast) {
    lists = new List();
  }

  return lists;
};
export const filterGetInSelector = createSelector(
  [filterDataGetInSelector],
  data => data,
);

/**
 * SetIn : Filter immutable object.
 *
 * @param { state } `Immutable` object.
 * @param { data } `Object` is data to filter.
 * @param { params } `Object` which consist the following keys.
 *      @param { arrLoc } `Array` to get a value deep within a structure of data.
 *      @param { item_field } `String` a conditional field to filter.
 *      @param { data_field } `String` a conditional field to filter.
 * return { state } will return the final state value.
 */
const setDataPlanSelector = (state, params) => {
  const newPlan = {
    name: params.name.split('_')[0],
    id: params.name,
    started: params.started,
    ended: params.ended,
    changeable: params.changeable,
    available_plan: params.available_plan,
  };

  return state.setIn(params.arrLoc, Seq(newPlan).toMap());
};
export const setPlanSelector = createSelector(
  [setDataPlanSelector],
  data => data,
);

/**
 * updateDataPlanSelector
 *
 * @param { state } `Immutable` object.
 * @param { params } `Array` which consist the following keys.
 * @param { item } `Object` is an item to be added.
 *
 * return { state } will return the final state value.
 */
const updateDataPlanSelector = (state, data, params) => {
  let lists = state.getIn(params.arrLoc);
  let checkSelected = false;

  lists = lists.reduce((prev, next) => {
    let nextList = next;
    if (checkSelected) {
      nextList = nextList.set('button_plan', 'Upgrade');
    } else {
      nextList = nextList.set('button_plan', '');
    }

    if (nextList.get(params.item_field) === data[params.data_field]) {
      nextList = nextList.set('button_plan', 'Cancel');
      checkSelected = true;
    }

    prev.push(nextList);

    return prev;
  }, []);

  return Seq(lists).toList();
};
export const updatePlanSelector = createSelector(
  [updateDataPlanSelector],
  data => data,
);

/**
 * AddItem
 *
 * @param { state } `Immutable` object.
 * @param { params } `Array` which consist the following keys.
 * @param { item } `Object` is an item to be added.
 *
 * return { state } will return the final state value.
 */
const addItem = (state, params, item) =>
  state.updateIn(params, arrItem => arrItem.push(Seq(item).toMap()));

export const addItemSelector = createSelector([addItem], data => data);

/**
 * RemoveItem
 *
 * @param { state } `Immutable` object.
 * @param { params } `Array` which consist the following keys.
 * @param { selectedItemId } `id` specific field to be filtered out.
 *
 * return { state } will return the final state value.
 */
const removeItem = (state, params, selectedItemId) => {
  let getData = state.getIn(params);
  if (getData) {
    getData = getData.filter(items => items.get('id') !== selectedItemId);
  }

  return state.setIn(params, getData);
};
export const removeItemSelector = createSelector([removeItem], data => data);
