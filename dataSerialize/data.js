/**
 * 数据序列化
 * @param callback
 */
dataSerialize = function (obj) {
    var configData = [];
    var otr = $(obj).find('table tbody tr');
   // var otr = $(obj).find('li');
    otr.each(function (index, item) {
        var imgUrl = $(item).find('.img img').attr('src'),
            dataType = $(item).find('.link-select .j-val').attr('datetype'),
            catIds = $(item).find('.category-select').find('.j-val').attr('data-cid'),
            catIdsName = $(item).find('.category-select').find('.j-val').text(),
            brandId = $(item).find('.brand-select').find('.j-val').data('brand-id'),
            brandName = $(item).find('.brand-select').find('.j-val').text(),
            status = $(item).find('span.status').attr('status'),
            moduleId = $('#moduleId').val(),
            idv = $(item).attr('dataid');
        var dataJson = {
            moduleId:moduleId,
            moduleType:moduleTypeVal,
            sort:index,
            id:idv,
            imageUrl: imgUrl,
            type:dataType,
            status:status,
            sku:skuId

        };
        switch (dataType){
            case 'EVENT_PAGE':
                dataJson.linkUrl = $(item).find('input[name="eventPage"]').val();
                break;
            case 'SKUID':
                dataJson.sku = $(item).find('input[name="skuId"]').val();
                break;
            case 'SEARCH_WORDS':
                dataJson.keywords = $(item).find('input[name="searchKeywords"]').val();
                break;
            case 'Brand':
                dataJson.categoryId = catIds;
                dataJson.brandId = brandId;
                dataJson.categoryName = catIdsName;
                dataJson.brandName = brandName;
                break;
        }
        configData.push(dataJson);
    });

    configData = JSON.stringify(configData);
    return configData;
};