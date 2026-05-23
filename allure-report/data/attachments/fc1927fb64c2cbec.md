# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: android\TC-007.spec.ts >> Package Filter
- Location: tests\android\TC-007.spec.ts:8:5

# Error details

```
unknown error: WebDriverError: 'GET /session/c3c285f7-5270-4e5d-b6cc-1d117b8cf384/element/00000000-0000-0b97-ffff-ffff00000283/text' cannot be proxied to UiAutomator2 server because the instrumentation process is not running (probably crashed). Check the server log and/or the logcat output for more details when running "element/00000000-0000-0b97-ffff-ffff00000283/text" with method "GET"
```

# Test source

```ts
  275 |         const scrollView = await this.driver.$(this.scrollView);
  276 |       
  277 |         for (let i = 0; i < maxScroll; i++) {
  278 |       
  279 |           // get all visible product containers
  280 |           const productContainers = await this.driver.$$(
  281 |             '//androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup'
  282 |           );
  283 |       
  284 |           // validate title
  285 |           for (const container of productContainers) {
  286 |       
  287 |             try {
  288 |       
  289 |               const title = await container.$(
  290 |                 'id:com.saucelabs.mydemoapp.android:id/titleTV'
  291 |               );
  292 |       
  293 |               const text = await title.getText();
  294 |       
  295 |               console.log(`VISIBLE ITEM : ${text}`);
  296 |       
  297 |               if (text.trim() === expectedTitle.trim()) {
  298 |       
  299 |                 console.log(`FOUND PRODUCT : ${text}`);
  300 |       
  301 |                 // click product container
  302 |                 await container.click();
  303 |       
  304 |                 return true;
  305 |               }
  306 |       
  307 |             } catch (error) {
  308 |       
  309 |               console.log('INVALID PRODUCT CONTAINER');
  310 |             }
  311 |           }
  312 |       
  313 |           // scroll
  314 |           let canScroll = false;
  315 |       
  316 |           try {
  317 |       
  318 |             canScroll = await this.driver.execute(
  319 |               'mobile: scrollGesture',
  320 |               {
  321 |                 elementId: scrollView.elementId,
  322 |                 direction,
  323 |                 percent: 0.7
  324 |               }
  325 |             );
  326 |       
  327 |             await this.driver.pause(1000);
  328 |       
  329 |           } catch (error) {
  330 |       
  331 |             console.log('Scroll Error : ', error);
  332 |       
  333 |             return false;
  334 |           }
  335 |       
  336 |           /**
  337 |            * if cannot scroll anymore:
  338 |            * bottom -> scroll up
  339 |            * top -> stop
  340 |            */
  341 |           if (!canScroll) {
  342 |       
  343 |             if (direction === 'down') {
  344 |       
  345 |               console.log('REACH BOTTOM -> SCROLL UP');
  346 |       
  347 |               direction = 'up';
  348 |       
  349 |             } else {
  350 |       
  351 |               console.log('REACH TOP -> STOP SEARCH');
  352 |       
  353 |               break;
  354 |             }
  355 |           }
  356 |         }
  357 |       
  358 |         return false;
  359 |       }
  360 | 
  361 |     txtTitle = 'id:com.saucelabs.mydemoapp.android:id/titleTV';
  362 | 
  363 |     /**
  364 |      * Get all visible product titles
  365 |      * without scrolling
  366 |      */
  367 |     async getVisibleTitles(): Promise<string[]> {
  368 | 
  369 |       const elements = await this.driver.$$(this.txtTitle);
  370 | 
  371 |       const titles: string[] = [];
  372 | 
  373 |       for (const item of elements) {
  374 | 
> 375 |         const text = await item.getText();
      |                      ^ unknown error: WebDriverError: 'GET /session/c3c285f7-5270-4e5d-b6cc-1d117b8cf384/element/00000000-0000-0b97-ffff-ffff00000283/text' cannot be proxied to UiAutomator2 server because the instrumentation process is not running (probably crashed). Check the server log and/or the logcat output for more details when running "element/00000000-0000-0b97-ffff-ffff00000283/text" with method "GET"
  376 | 
  377 |         if (text.trim() !== '') {
  378 |           titles.push(text.trim());
  379 |         }
  380 |       }
  381 | 
  382 |       return titles;
  383 |     }
  384 | 
  385 |     /**
  386 |      * Validate ascending sort
  387 |      */
  388 |     async validateSortAscending(): Promise<boolean> {
  389 | 
  390 |       const actualTitles = await this.getVisibleTitles();
  391 | 
  392 |       const expectedTitles = [...actualTitles].sort(
  393 |         (a, b) => a.localeCompare(b)
  394 |       );
  395 | 
  396 |       console.log('ACTUAL : ', actualTitles);
  397 |       console.log('EXPECTED ASC : ', expectedTitles);
  398 | 
  399 |       return JSON.stringify(actualTitles) ===
  400 |         JSON.stringify(expectedTitles);
  401 |     }
  402 | 
  403 |     /**
  404 |      * Validate descending sort
  405 |      */
  406 |     async validateSortDescending(): Promise<boolean> {
  407 | 
  408 |       const actualTitles = await this.getVisibleTitles();
  409 | 
  410 |       const expectedTitles = [...actualTitles].sort(
  411 |         (a, b) => b.localeCompare(a)
  412 |       );
  413 | 
  414 |       console.log('ACTUAL : ', actualTitles);
  415 |       console.log('EXPECTED DESC : ', expectedTitles);
  416 | 
  417 |       return JSON.stringify(actualTitles) ===
  418 |         JSON.stringify(expectedTitles);
  419 |     }
  420 | }
```