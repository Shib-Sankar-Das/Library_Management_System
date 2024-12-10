<h1>BACKEND</h1>
  <ul>
    <li>.env</li>
    <li>.gitignore</li>
    <li><a href="backend\AdminRegister.js">AdminRegister.js</a></li>
    <li><a href="backend\index.js">index.js</a></li>
    <li>package-lock.json</li>
    <li>package.json</li>
    <li>test.rest</li>
    <li><strong>assets</strong>
      <ul>
        <li>not-admin.svg</li>
        <li>not-found.svg</li>
        <li>not-user.svg</li>
      </ul>
    </li>
    <li><strong>models</strong>
      <ul>
        <li><a href="backend\models\Admin.js">Admin.js</a></li>
        <li><a href="backend\models\Book.js">Book.js</a></li>
        <li><a href="backend\models\Borrow.js">Borrow.js</a></li>
        <li><a href="backend\models\index.js">index.js</a></li>
        <li><a href="backend\models\User.js">User.js</a></li>
      </ul>
    </li>
    <li><strong>routes</strong>
      <ul>
        <li><a href="backend\routes\index.js">index.js</a></li>
        <li><strong>Admin</strong>
          <ul>
            <li><a href="backend\routes\Admin\index.js">index.js</a></li>
            <li><strong>GET</strong>
              <ul>
                <li><a href="backend\routes\Admin\GET\adminNotFoundError.js">adminNotFoundError.js</a></li>
                <li><a href="backend\routes\Admin\GET\endPoint.js">endPoint.js</a></li>
                <li><a href="backend\routes\Admin\GET\invalidCookiesError.js">invalidCookiesError.js</a></li>
                <li><a href="backend\routes\Admin\GET\invalidCredentialError.js">invalidCredentialError.js</a></li>
                <li><a href="backend\routes\Admin\GET\methods.js">methods.js</a></li>
              </ul>
            </li>
            <li><strong>PUT</strong>
              <ul>
                <li><a href="backend\routes\Admin\PUT\endPoint.js">endPoint.js</a></li>
                <li><a href="backend\routes\Admin\PUT\invalidCookiesError.js">invalidCookiesError.js</a></li>
                <li><a href="backend\routes\Admin\PUT\methods.js">methods.js</a></li>
                <li><a href="backend\routes\Admin\PUT\updateProfilePicture.js">updateProfilePicture.js</a></li>
                <li><a href="backend\routes\Admin\PUT\updateTextFields.js">updateTextFields.js</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Books</strong>
          <ul>
            <li><a href="backend\routes\Books\index.js">index.js</a></li>
            <li><strong>AdminRouter</strong>
              <ul>
                <li><a href="backend\routes\Books\AdminRouter\index.js">index.js</a></li>
                <li><strong>GET</strong>
                  <ul>
                    <li><a href="backend\routes\Books\AdminRouter\GET\endPoint.js">endPoint.js</a></li>
                    <li><a href="backend\routes\Books\AdminRouter\GET\getBookData.js">getBookData.js</a></li>
                    <li><a href="backend\routes\Books\AdminRouter\GET\invalidCookiesError.js">invalidCookiesError.js</a>
                    </li>
                    <li><a href="backend\routes\Books\AdminRouter\GET\invalidRequestError.js">invalidRequestError.js</a>
                    </li>
                    <li><a href="backend\routes\Books\AdminRouter\GET\methods.js">methods.js</a></li>
                  </ul>
                </li>
                <li><strong>POST</strong>
                  <ul>
                    <li><a href="backend\routes\Books\AdminRouter\POST\endPoint.js">endPoint.js</a></li>
                    <li><a href="backend\routes\Books\AdminRouter\POST\insertNewBook.js">insertNewBook.js</a></li>
                    <li><a
                        href="backend\routes\Books\AdminRouter\POST\invalidCookiesError.js">invalidCookiesError.js</a>
                    </li>
                    <li><a
                        href="backend\routes\Books\AdminRouter\POST\invalidMimeTypeError.js">invalidMimeTypeError.js</a>
                    </li>
                    <li><a
                        href="backend\routes\Books\AdminRouter\POST\invalidRequestError.js">invalidRequestError.js</a>
                    </li>
                    <li><a href="backend\routes\Books\AdminRouter\POST\methods.js">methods.js</a></li>
                  </ul>
                </li>
                <li><strong>PUT</strong>
                  <ul>
                    <li><a href="backend\routes\Books\AdminRouter\PUT\endPoint.js">endPoint.js</a></li>
                    <li><a href="backend\routes\Books\AdminRouter\PUT\invalidCookiesError.js">invalidCookiesError.js</a>
                    </li>
                    <li><a href="backend\routes\Books\AdminRouter\PUT\invalidRequestError.js">invalidRequestError.js</a>
                    </li>
                    <li><a href="backend\routes\Books\AdminRouter\PUT\methods.js">methods.js</a></li>
                    <li><a href="backend\routes\Books\AdminRouter\PUT\updateBorrowDetails.js">updateBorrowDetails.js</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><strong>GET</strong>
              <ul>
                <li><a href="backend\routes\Books\GET\endPoint.js">endPoint.js</a></li>
                <li><a href="backend\routes\Books\GET\methods.js">methods.js</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>BorrowBook</strong>
          <ul>
            <li><a href="backend\routes\BorrowBook\index.js">index.js</a></li>
            <li><strong>AdminsRouter</strong>
              <ul>
                <li><a href="backend\routes\BorrowBook\AdminsRouter\index.js">index.js</a></li>
                <li><strong>DELETE</strong>
                  <ul>
                    <li><a
                        href="backend\routes\BorrowBook\AdminsRouter\DELETE\deleteBorrowRequest.js">deleteBorrowRequest.js</a>
                    </li>
                    <li><a href="backend\routes\BorrowBook\AdminsRouter\DELETE\endPoint.js">endPoint.js</a></li>
                    <li><a
                        href="backend\routes\BorrowBook\AdminsRouter\DELETE\invalidCookiesError.js">invalidCookiesError.js</a>
                    </li>
                    <li><a
                        href="backend\routes\BorrowBook\AdminsRouter\DELETE\invalidRequestError.js">invalidRequestError.js</a>
                    </li>
                    <li><a href="backend\routes\BorrowBook\AdminsRouter\DELETE\methods.js">methods.js</a></li>
                  </ul>
                </li>
                <li><strong>GET</strong>
                  <ul>
                    <li><a href="backend\routes\BorrowBook\AdminsRouter\GET\endPoint.js">endPoint.js</a></li>
                    <li><a href="backend\routes\BorrowBook\AdminsRouter\GET\getBorrowData.js">getBorrowData.js</a></li>
                    <li><a
                        href="backend\routes\BorrowBook\AdminsRouter\GET\invalidCookiesError.js">invalidCookiesError.js</a>
                    </li>
                    <li><a href="backend\routes\BorrowBook\AdminsRouter\GET\methods.js">methods.js</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><strong>GET</strong>
              <ul>
                <li><a href="backend\routes\BorrowBook\GET\badRequestError.js">badRequestError.js</a></li>
                <li><a href="backend\routes\BorrowBook\GET\endPoint.js">endPoint.js</a></li>
                <li><a href="backend\routes\BorrowBook\GET\invalidCookiesError.js">invalidCookiesError.js</a></li>
                <li><a href="backend\routes\BorrowBook\GET\methods.js">methods.js</a></li>
              </ul>
            </li>
            <li><strong>POST</strong>
              <ul>
                <li><a
                    href="backend\routes\BorrowBook\POST\duplicateBorrowRequestError.js">duplicateBorrowRequestError.js</a>
                </li>
                <li><a href="backend\routes\BorrowBook\POST\endPoint.js">endPoint.js</a></li>
                <li><a href="backend\routes\BorrowBook\POST\invalidCookiesError.js">invalidCookiesError.js</a></li>
                <li><a href="backend\routes\BorrowBook\POST\invalidRequestError.js">invalidRequestError.js</a></li>
                <li><a href="backend\routes\BorrowBook\POST\invalidUserIdError.js">invalidUserIdError.js</a></li>
                <li><a href="backend\routes\BorrowBook\POST\methods.js">methods.js</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Images</strong>
          <ul>
            <li><a href="backend\routes\Images\AdminAvatar.js">AdminAvatar.js</a></li>
            <li><a href="backend\routes\Images\ClientAvatar.js">ClientAvatar.js</a></li>
            <li><a href="backend\routes\Images\CoverPages.js">CoverPages.js</a></li>
            <li><a href="backend\routes\Images\index.js">index.js</a></li>
          </ul>
        </li>
        <li><strong>User</strong>
          <ul>
            <li><a href="backend\routes\User\index.js">index.js</a></li>
            <li><strong>DELETE</strong>
              <ul>
                <li><a href="backend\routes\User\DELETE\endPoint.js">endPoint.js</a></li>
                <li><a href="backend\routes\User\DELETE\methods.js">methods.js</a></li>
              </ul>
            </li>
            <li><strong>GET</strong>
              <ul>
                <li><a href="backend\routes\User\GET\endPoint.js">endPoint.js</a></li>
                <li><a href="backend\routes\User\GET\invalidCookiesError.js">invalidCookiesError.js</a></li>
                <li><a href="backend\routes\User\GET\invalidCredentialError.js">invalidCredentialError.js</a></li>
                <li><a href="backend\routes\User\GET\methods.js">methods.js</a></li>
                <li><a href="backend\routes\User\GET\userNotFoundError.js">userNotFoundError.js</a></li>
              </ul>
            </li>
            <li><strong>POST</strong>
              <ul>
                <li><a href="backend\routes\User\POST\duplicateCredentialError.js">duplicateCredentialError.js</a></li>
                <li><a href="backend\routes\User\POST\endPoint.js">endPoint.js</a></li>
                <li><a href="backend\routes\User\POST\invalidCredentialError.js">invalidCredentialError.js</a></li>
                <li><a href="backend\routes\User\POST\invalidMimeTypeError.js">invalidMimeTypeError.js</a></li>
                <li><a href="backend\routes\User\POST\methods.js">methods.js</a></li>
              </ul>
            </li>
            <li><strong>PUT</strong>
              <ul>
                <li><a href="backend\routes\User\PUT\endPoint.js">endPoint.js</a></li>
                <li><a href="backend\routes\User\PUT\invalidCookiesError.js">invalidCookiesError.js</a></li>
                <li><a href="backend\routes\User\PUT\methods.js">methods.js</a></li>
                <li><a href="backend\routes\User\PUT\updateProfilePicture.js">updateProfilePicture.js</a></li>
                <li><a href="backend\routes\User\PUT\updateTextFields.js">updateTextFields.js</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>validator</strong>
      <ul>
        <li><a href="backend\validator\BookCopyValidator.js">BookCopyValidator.js</a></li>
        <li><a href="backend\validator\BookValidator.js">BookValidator.js</a></li>
        <li><a href="backend\validator\BorrowDetailsObject.js">BorrowDetailsObject.js</a></li>
        <li><a href="backend\validator\BorrowRequestValidator.js">BorrowRequestValidator.js</a></li>
        <li><a href="backend\validator\ClientUpdateRequestValidator.js">ClientUpdateRequestValidator.js</a></li>
        <li><a href="backend\validator\ClientValidator.js">ClientValidator.js</a></li>
        <li><a href="backend\validator\__ISBN__.js">__ISBN__.js</a></li>
      </ul>
    </li>
  </ul>
  <h1>FRONTEND</h1>
  <ul>
    <li>.eslintrc.cjs</li>
    <li>.gitignore</li>
    <li>index.html</li>
    <li>package-lock.json</li>
    <li>package.json</li>
    <li><a href="frontend\postcss.config.js">postcss.config.js</a></li>
    <li>README.md</li>
    <li><a href="frontend\tailwind.config.js">tailwind.config.js</a></li>
    <li>tsconfig.app.json</li>
    <li>tsconfig.json</li>
    <li>tsconfig.node.json</li>
    <li><a href="frontend\vite.config.ts">vite.config.ts</a></li>
    <li><strong>public</strong>
      <ul>
        <li>add-books.svg</li>
        <li>avatar.svg</li>
        <li>back.jpg</li>
        <li>catalog.png</li>
        <li>digital-resources.png</li>
        <li>fall_back_cover.jpeg</li>
        <li>invalid.svg</li>
        <li>library.jpg</li>
        <li>member.png</li>
        <li>notFile.svg</li>
        <li>vite.svg</li>
      </ul>
    </li>
    <li><strong>src</strong>
      <ul>
        <li>App.css</li>
        <li><a href="frontend\src\App.tsx">App.tsx</a></li>
        <li>index.css</li>
        <li><a href="frontend\src\main.tsx">main.tsx</a></li>
        <li><a href="frontend\src\vite-env.d.ts">vite-env.d.ts</a></li>
        <li><strong>assets</strong>
          <ul>
            <li>react.svg</li>
          </ul>
        </li>
        <li><strong>Components</strong>
          <ul>
            <li><a href="frontend\src\Components\NoDataFound.tsx">NoDataFound.tsx</a></li>
            <li><strong>Admin</strong>
              <ul>
                <li><a href="frontend\src\Components\Admin\AddBooks.tsx">AddBooks.tsx</a></li>
                <li><a href="frontend\src\Components\Admin\AdminSettings.tsx">AdminSettings.tsx</a></li>
                <li><a href="frontend\src\Components\Admin\Book.tsx">Book.tsx</a></li>
                <li><a href="frontend\src\Components\Admin\BookView.tsx">BookView.tsx</a></li>
                <li><a href="frontend\src\Components\Admin\BorrowAdminTable.tsx">BorrowAdminTable.tsx</a></li>
                <li><a href="frontend\src\Components\Admin\BorrowAdminViewer.tsx">BorrowAdminViewer.tsx</a></li>
                <li><a href="frontend\src\Components\Admin\BorrowApproval.tsx">BorrowApproval.tsx</a></li>
                <li><a href="frontend\src\Components\Admin\UserPreviewNavbar.tsx">UserPreviewNavbar.tsx</a></li>
              </ul>
            </li>
            <li><strong>Icon</strong>
              <ul>
                <li><a href="frontend\src\Components\Icon\AddBookIcon.tsx">AddBookIcon.tsx</a></li>
                <li><a href="frontend\src\Components\Icon\ArrowLinkIcon.tsx">ArrowLinkIcon.tsx</a></li>
                <li><a href="frontend\src\Components\Icon\BooksViewIcon.tsx">BooksViewIcon.tsx</a></li>
                <li><a href="frontend\src\Components\Icon\BorrowIcon.tsx">BorrowIcon.tsx</a></li>
                <li><a href="frontend\src\Components\Icon\ReloadIcon.tsx">ReloadIcon.tsx</a></li>
                <li><a href="frontend\src\Components\Icon\ReturnIcon.tsx">ReturnIcon.tsx</a></li>
                <li><a href="frontend\src\Components\Icon\UserIcon.tsx">UserIcon.tsx</a></li>
              </ul>
            </li>
            <li><strong>User</strong>
              <ul>
                <li><a href="frontend\src\Components\User\Book.tsx">Book.tsx</a></li>
                <li><a href="frontend\src\Components\User\BooksView.tsx">BooksView.tsx</a></li>
                <li><a href="frontend\src\Components\User\Borrow.tsx">Borrow.tsx</a></li>
                <li><a href="frontend\src\Components\User\BorrowView.tsx">BorrowView.tsx</a></li>
                <li><a href="frontend\src\Components\User\Settings.tsx">Settings.tsx</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Options</strong>
          <ul>
            <li><a href="frontend\src\Options\BottomToastOption.ts">BottomToastOption.ts</a></li>
          </ul>
        </li>
        <li><strong>Pages</strong>
          <ul>
            <li><a href="frontend\src\Pages\AdminAuthentication.tsx">AdminAuthentication.tsx</a></li>
            <li><a href="frontend\src\Pages\AdminDashBoard.tsx">AdminDashBoard.tsx</a></li>
            <li><a href="frontend\src\Pages\AdminUserPreview.tsx">AdminUserPreview.tsx</a></li>
            <li><a href="frontend\src\Pages\HomePage.tsx">HomePage.tsx</a></li>
            <li><a href="frontend\src\Pages\UserAuthentication.tsx">UserAuthentication.tsx</a></li>
            <li><a href="frontend\src\Pages\UserDashBoard.tsx">UserDashBoard.tsx</a></li>
          </ul>
        </li>
        <li><strong>Validator</strong>
          <ul>
            <li><a href="frontend\src\Validator\AdminLoginValidator.ts">AdminLoginValidator.ts</a></li>
            <li><a href="frontend\src\Validator\AdminValidator.ts">AdminValidator.ts</a></li>
            <li><a href="frontend\src\Validator\BookCopy.ts">BookCopy.ts</a></li>
            <li><a href="frontend\src\Validator\BookIdList.ts">BookIdList.ts</a></li>
            <li><a href="frontend\src\Validator\BorrowDetailsValidator.ts">BorrowDetailsValidator.ts</a></li>
            <li><a href="frontend\src\Validator\BorrowRequestObject.ts">BorrowRequestObject.ts</a></li>
            <li><a href="frontend\src\Validator\BorrowResponseValidator.ts">BorrowResponseValidator.ts</a></li>
            <li><a href="frontend\src\Validator\ClientSignup.ts">ClientSignup.ts</a></li>
            <li><a href="frontend\src\Validator\UploadBookValidator.ts">UploadBookValidator.ts</a></li>
            <li><a href="frontend\src\Validator\UserValidator.ts">UserValidator.ts</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

# Project preview

![home_page_1](./screenshots/home_page_1.png)
![home_page_2](./screenshots/home_page_2.png)
![admin-login](./screenshots/admin-login.png)
![admin-user-pannel](./screenshots/admin-user-pannel.png)
![admins-user-preview](./screenshots/admins-user-preview.png)
![admin-book-pannel](./screenshots/admin-book-pannel.png)
![add-book](./screenshots/add-book.png)
![update-admin-details](./screenshots/update-admin-details.png)
![user-signup](./screenshots/user-signup.png)
![user-login](./screenshots/user-login.png)
![user-book-view](./screenshots/user-book-view.png)
![user-borrow-preview](./screenshots/user-borrow-preview.png)
![user-details-update](./screenshots/user-details-update.png)
[![preview](./screenshots/home_page_1.png)](https://youtu.be/xlRhx8V5Fvw?si=-NkbGefnJRrSTczz)
