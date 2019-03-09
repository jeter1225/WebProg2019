# HW1 README
## 基本要求
1. 可建立數個 TodoItems  
    main.js 第28行 list_creator 這個function，由 createElement 產生各種tag，並藉由 appendChild 來將各個tag包覆起來，建立node關聯，中間的 setAttribute 設置各類參數，最後return給第12行的keyup。 我設置了一個全域陣列 todo_items ，將所有創造的list push進去，並在這裡設計最一開始沒有item時，footer不會出現，還有footer的uncompleted的計數器。
2. 可新增刪除任意 TodoItem  
    新增所需要的function在上面一點已經提過，至於刪除，可以到第158行 delete_item。將id與 todo_items相同的list透過 splice 刪除，順便刪掉 $<ul>$ 裡面的child。若整個 TodoItem為空，則將footer隱藏。
3. 可勾選已完成的 TodoItem  
    72行的 select_item，首先找出選取物件的id，再來，若未被選取，則將該list的title做出刪除線與降低透明度的修飾，並在class裡以 completed 做出區隔。反之則加入 active。在最後動態的處理footer顯示的未完成數量。
4. 在畫面上顯示已完成的 TodoItems 的不同  
    上面已有說明。
5. 統計並顯示未完成的 TodoItem 數量  
    在上述提到的function，若有數量變化，皆有統計與顯示，計數的code在第24, 104, 168行。
    
## 進階功能
1. filter 已完成/未完成項目  
    可以看到第109行 filter_selection。 html裡可以看到，各個button傳入的值不同，因此在137行可以藉由該傳入值找到class list是否包含該狀態，並篩選出來。而狀態的變化可以在86與94行找到。同時117行至135行，做出該button是否在被選取的狀態。在107行，預設狀態為all。
2. 一鍵刪除所有已完成項目  
    在第145行的 delete_completed，藉由for迴圈來找尋 iscomplete 為true的item，並藉由splice來刪除。最後有設計若全部的list皆已被刪除，則footer隱藏。

## 特殊處理
1. demo video並沒有展示若在completed的filter狀態，同時新增一個item，允不允許在該狀態顯示新的item，或是需要直接移至active。為了解決這個狀態，我設置了一個全域變數state來表示我目前的filter button是哪一個，藉此避免在completed的狀態下，新增item會顯示出active的item的情形。  

2. 在active或是completed的button狀態下，勾選或是取消勾選，皆會重新filter，避免狀態有衝突的情形。

