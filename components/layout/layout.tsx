import MainNavigation from './main-navigation';

type Props = {
  children: JSX.Element | JSX.Element[],
};

function Layout(props: Props) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
